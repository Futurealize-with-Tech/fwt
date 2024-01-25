"use client";

import styles from "./imgFormModal.module.scss";
import modalStyles from "./modal.module.scss";
import { useState, useRef } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { cardDesigns } from "@/lib/data/CardDesign/cardDesigns";

const postMessage = async(memberName: string, body: string, cardDesign: number, mentorId: number) => {
  try {
    const res = await fetch(`/api/v1/form`, {
      method: "POST",
      body: JSON.stringify({memberName, body, cardDesign, mentorId}),
      headers: {
        "Content-type": "application/json",
      }
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export const ImageFormModal = ({
  id,
  memberName,
  message,
  onClose,
}: {
  id: number;
  memberName: string;
  message: string;
  onClose: () => void;
}) => {
  const [[design, direction], setDesign] = useState([0, 0]);

  const animateImage = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 300 : -300,
        opacity: 0,
        display: 'none'
      };
    },
    center: {
      opacity: 1,
      x: 0,
      display: 'block'
    },
    exit: (direction: number) => {
      return {
        x: direction < 0 ? 300 : -300,
        opacity: 0,
        display: 'none'
      };
    },
  };

  const paginate = (newDirection: number) => {
    if (design === 0 && newDirection === -1) return;
    if (design === cardDesigns.length -1 && newDirection === 1) return;
    setDesign([design + newDirection, newDirection]);
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    postMessage(memberName, message, 1, id);
  };

  return (
    <div className={modalStyles['modal-form']}>
      <div className={modalStyles["modal-form-container"]}>
        <div className={modalStyles["modal-title"]}>画像デザインを選択</div>
        <div className={styles["before-button"]} onClick={onClose}>
          <IoArrowBackOutline />
        </div>
        <div className={styles['img-container']}>
          <div
            className={styles['arrow-before']}
            style={design === 0 ? {opacity: 0.4} : {opacity: 1}}
            onClick={() => paginate(-1)}
          >
            <IoIosArrowBack />
          </div>
          <div
            className={styles['arrow-after']}
            style={design === cardDesigns.length - 1 ? {opacity: 0.4} : {opacity: 1}}
            onClick={() => paginate(1)}
          >
            <IoIosArrowForward />
          </div>
          <div className={styles['card-img-box']}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={design}
                custom={direction}
                variants={animateImage}
                initial="enter"
                animate="center"
                exit="exit"
                className={styles['card-img-box-cushion']}
              >
                <Image src={cardDesigns[design].image} alt={cardDesigns[design].name} width={250} className={styles['card-img']} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className={styles['card-index']}>
        {cardDesigns.map((item) => {
          return (
              <Image
                src={item.image}
                alt={`${item.id}`}
                width={40}
                className={styles[cardDesigns[design].id === item.id ? 'index-card-img-focus' : 'index-card-img']}
                onClick={() => setDesign([item.id, 0])}
                key={`${item.id}`}
              />
          );
        })}
        </div>
        <div className={modalStyles['send-button']}>
          選択する
        </div>
      </div>
    </div>
  );
};