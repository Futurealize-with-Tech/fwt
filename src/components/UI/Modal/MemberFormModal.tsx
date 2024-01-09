'use client'

import styles from "./modal.module.scss";
import React, { useState, useEffect } from "react";
import { postMessage } from "../../../../utils/supabasePostFunctions";
import { HiArrowCircleRight } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

export const MemberFormModal = ({
  id, onClose,
}: {
  id: number, onClose: () => void,
}) => {
  const [memberName, setmemberName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    //追加
    await postMessage(memberName, message);

    setmemberName("");
  };
  // useEffect(() => {
  //   const getName = async () => {};
  // }, []);

  return (
    <>
    <div className={styles["modal-form"]}>
      <div className={styles["modal-form-container"]}>
        <div className={styles['close-button']} onClick={onClose}>
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
                <input
                  className={styles["toImgBtn"]}
                  value="画像デザインを選択"
                />
              </div>
              <div>
                <HiArrowCircleRight className={styles["icon"]} />
              </div>
            </div>
            <div>
              <div
                onClick={onClose}
                className={styles["cancelBtn"]}
              >
                キャンセル
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div className={styles['modal-bg-black']} onClick={onClose} />
    </>
  );
};
