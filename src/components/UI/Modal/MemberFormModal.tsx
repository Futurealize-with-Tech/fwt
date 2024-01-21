"use client";

import styles from "./modal.module.scss";
import React, { useState } from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { ImageFormModal } from "./imgFormModal";
import ToImageButton from "../Button/Mentor/ToImgButton";

export const MemberFormModal = ({
  id,
  onClose,
}: {
  id: number;
  onClose: () => void;
}) => {
  const [memberName, setmemberName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (memberName === "" || message === "") return;
    //追加
    setmemberName("");
    setMessage("");
  };

  const [isImgModalOpen, setIsImgModalOpen] = useState(false);

  const handleImgModal = () => {
    setIsImgModalOpen(!isImgModalOpen);
  };
  return (
    <>
      <div className={styles["modal-form"]}>
        <div className={styles["modal-form-container"]}>
          <div className={styles["close-button"]} onClick={onClose}>
            <RxCross2 />
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <div className={styles["container"]}>
                <div>TO</div>
                <div>(メンター名)</div>
              </div>
              <div className={styles["container"]}>
                <div>FROM</div>
                <input
                  type="text"
                  className={styles["name-textform"]}
                  placeholder="メンバー名を入力"
                  value={memberName}
                  onChange={(e) => setmemberName(e.target.value)}
                />
              </div>
              <div className={styles["container"]}>
                <div>MESSAGE</div>
                <textarea
                  name="message"
                  cols={30}
                  rows={10}
                  className={styles["message-textform"]}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="メッセージを入力"
                ></textarea>
              </div>
              <div className={styles["submitBtn"]}>
                <div>
                  <div className={styles["toImgBtn"]}>
                  <ToImageButton id={id} memberName={memberName} message={message} />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className={styles["modal-bg-black"]} onClick={onClose} />
    </>
  );
};
