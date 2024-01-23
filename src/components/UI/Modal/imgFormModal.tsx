"use client";

import styles from "./imgFormModal.module.scss";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Image1 from "@/public/img/image1.jpg";
import Image2 from "@/public/img/image2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { RxCross2 } from "react-icons/rx";

const postMessage = async (
  memberName: string,
  body: string,
  cardDesign: number,
  mentorId: number
) => {
  try {
    const res = await fetch(`/api/v1/form`, {
      method: "POST",
      body: JSON.stringify({ memberName, body, cardDesign, mentorId }),
      headers: {
        "Content-type": "application/json",
      },
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
  const handleClick = (e: any) => {
    e.preventDefault();
    postMessage(memberName, message, 1, id);
    onClose();
  };

  return (
    <>
      <div className={styles["overly"]}>
        <div className={styles["content"]}>
          <div className={styles["title-label"]}>画像デザインを選択</div>
          <div className={styles["close-button"]} onClick={onClose}>
            <RxCross2 />
          </div>
          <div className={styles["contaner"]}>
            <Swiper
              className={styles["img-container"]}
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
            >
              <SwiperSlide className={styles["img-Btn"]}>
                <input type="button" value="1" />
                <Image src={Image1} alt="card" width={200} height={200} />
              </SwiperSlide>
              <SwiperSlide className={styles["img-Btn"]}>
                <input type="button" value="2" />
                <Image src={Image2} alt="card" width={200} height={200} />
              </SwiperSlide>
              <SwiperSlide className={styles["img-Btn"]}>
                <input type="button" value="3" />
                <Image src={Image1} alt="card" width={200} height={200} />
              </SwiperSlide>
            </Swiper>
            <div onClick={onClose}>
              <button onClick={handleClick} className={styles["submitBtn"]}>
                これにする
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
