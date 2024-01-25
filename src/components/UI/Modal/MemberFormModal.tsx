"use client";

import { SetStateAction, useRef, useState } from "react";
import styles from "./modal.module.scss";
import { RxCross2 } from "react-icons/rx";
import { CgAdd, CgSelectO } from "react-icons/cg";
import { CardDesignType } from "@/types/cardDesignType";
import { ImageFormModal } from "./imgFormModal";

export const MemberFormModal = ({
  id,
  onClose,
}: {
  id: number;
  onClose: () => void;
}) => {
  const [memberName, setMemberName] = useState("");
  const [message, setMessage] = useState("");
  const [cardDesign, setCardDesign] = useState<CardDesignType>();
  const [height, setHeight] = useState('auto');
  const [isImgModalOpen, setIsImgModalOpen] = useState(false);
  const textareaRef = useRef<any>(null);

  const handleMessageChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setMessage(e.target.value);
    const element = textareaRef.current;
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
    setHeight(`${element.scrollHeight}px`);
  };

  const handleImgModal = () => {
    setIsImgModalOpen(!isImgModalOpen);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (memberName === "" || message === "") return;
    //追加
    setMemberName("");
    setMessage("");
  };

  return (
    <>
    <div className={styles["modal-form"]}>
      <div
        className={styles["modal-form-container"]}
        style={isImgModalOpen ? { display: "none" } : { display: "flex" }}
      >
        <div className={styles["close-button"]} onClick={onClose}>
          <RxCross2 />
        </div>
        <p className={styles['modal-title']}><span>メンター</span>へ</p>
        <div className={styles['index-container']}>
          <div className={styles['input-container']}>
            <div className={styles['input-top-box']}>
              <p className={styles['input-top-title']}>From</p>
            </div>
            <div className={styles["input-box"]}>
              <input
                type="text"
                className={styles["input"]}
                placeholder="メンバー名を入力"
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
              />
            </div>
          </div>
          <div className={styles['input-container']}>
            <div className={styles['input-top-box']}>
              <p className={styles['input-top-title']}>Message</p>
            </div>
            <div className={styles["textarea-box"]}>
              <textarea
                className={styles["textarea"]}
                placeholder="メッセージを800文字以内で入力"
                value={message}
                onChange={handleMessageChange}
                ref={textareaRef}
                style={{height}}
              />
            </div>
          </div>
          <div className={styles['input-container']}>
            <div className={styles['input-top-box']}>
              <div className={styles['input-top-title']}>Card Design</div>
            </div>
            <div className={styles['img-select-container']}>
            {cardDesign ? (
              <>
              <div className={styles['img-info-box']}>

              </div>
              <div className={styles['img-select-icon']} onClick={handleImgModal}>
                <CgSelectO />
              </div>
              </>
            ) : (
              <>
              <div className={styles['img-info-name']}>画像を選択</div>
              <div className={styles['img-select-icon']} onClick={handleImgModal}>
                <CgAdd />
              </div>
              </>
            )}
            </div>
          </div>
          {(memberName === "" || message === "" || cardDesign === null) ? (
            <div className={styles['send-disable-button']}>
              メッセージを送信
            </div>
          ) : (
            <div className={styles['send-button']}>
              メッセージを送信
            </div>
          )}
        </div>
      </div>
    </div>
    <div className={styles["modal-bg-black"]} onClick={onClose} />
    {isImgModalOpen && (
      <ImageFormModal
        id={id}
        memberName={memberName}
        message={message}
        onClose={handleImgModal}
      />
    )}
    </>
  );
};
