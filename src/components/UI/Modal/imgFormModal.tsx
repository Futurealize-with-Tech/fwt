"use client";

import styles from "./imgFormModal.module.scss";
import React, { useState } from "react";
import Image from "next/image";
import Image1 from "@/public/img/image1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

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
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles["overly"]}>
        <div className={styles["content"]}>
          <div className={styles["title-label"]}>画像デザインを選択</div>
          <div className={styles["contaner"]}>
            <Swiper
              className={styles["img-container"]}
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
            >
              <SwiperSlide className={styles["img-Btn"]}>
                <button>
                  <Image src={Image1} alt='card' width={200} height={200} />
                </button>
              </SwiperSlide>
              <SwiperSlide className={styles["img-Btn"]}>
                <button>
                  <Image src={Image1} alt='card' width={200} height={200} />
                </button>
              </SwiperSlide>
              <SwiperSlide className={styles["img-Btn"]}>
                <button>
                  <Image src={Image1} alt='card' width={200} height={200} />
                </button>
              </SwiperSlide>
            </Swiper>
            <input
              type="submit"
              value="これにする"
              className={styles["submitBtn"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};
