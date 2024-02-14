"use client";

import { SetStateAction, useContext, useRef, useState } from "react";
import styles from "./modal.module.scss";
import Image from "next/image";
import ImageFormModal from "./ImageFormModal";
import TextLengthGauge from '@/components/UI/Form/TextLengthGauge';
import { CardDesignType } from "@/types/cardDesignType";
import { toast } from "react-toastify";
import { RxCross2 } from "react-icons/rx";
import { CgAdd, CgSelectO } from "react-icons/cg";
import { MentorsDataContext } from "@/middleware/MentorsDataProvider";
import CloseCheckModal from "./CloseCheckModal";
import MessageDraftModal from "./MessageDraftModal";
import { createDraftMessage } from "@/lib/Function/Message/createDraftMessage";
import { cardDesigns } from "@/lib/data/CardDesign/cardDesigns";
import { saveSentMentorData } from "@/lib/Function/Mentor/saveSentMentorData";
import { getSentMentorData } from "@/lib/Function/Mentor/getSentMentorData";

const postMessage = async(memberName: string, body: string, cardDesign: number, mentorId: number) => {
  try {
    const res = await fetch('/form', {
      method: "POST",
      body: JSON.stringify({memberName, body, cardDesign, mentorId}),
      headers: {
        "Content-type": "application/json",
      }
    });
    return res.json();
  } catch (error) {
  }
};

export default function MemberFormModal({
  id,
  onClose,
}: {
  id: number;
  onClose: () => void;
}) {
  const [mentorId, setMentorId] = useState(id);
  const [memberName, setMemberName] = useState("");
  const [message, setMessage] = useState("");
  const [cardDesign, setCardDesign] = useState<CardDesignType | null>(null);
  const [height, setHeight] = useState('auto');
  const [isImgModalOpen, setIsImgModalOpen] = useState(false);
  const [isDraftModalOpen, setIsDraftModalOpen] = useState(false);
  const [isCheckModalOpen, setIsCheckModalOpen] = useState(false);
  const textareaRef = useRef<any>(null);

  const mentorsData = useContext(MentorsDataContext);
  const mentorData = mentorsData.find((item) => item.id === mentorId);

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

  const handleDraftModal = () => {
    setIsDraftModalOpen(!isDraftModalOpen);
  };

  const handleCheckModal = () => {
    setIsCheckModalOpen(!isCheckModalOpen);
  };

  const handleClose = () => {
    if (memberName.trim() === "" && message.trim() === "") {
      onClose();
    } else {
      setIsCheckModalOpen(true);
    };
  };

  const handleCardDesign = (cardDesign: CardDesignType) => {
    setCardDesign(cardDesign);
  };

  const saveMessage = () => {
    createDraftMessage(mentorId, message, memberName, cardDesign?.id);
    onClose();
  };

  const setDraftMessage = (id: number, body?: string, from?: string, cardDesign?: number) => {
    const cardData = cardDesigns.find(item => item.id === cardDesign);

    setMentorId(id);
    setMessage(body ? body : "");
    setMemberName(from ? from : "");
    setCardDesign(cardData ? cardData : null);
    setIsDraftModalOpen(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const mentorIds = getSentMentorData();

    if (memberName.trim() !== "" && message.trim() !== "" && cardDesign) {
      if (mentorIds.includes(id)) {
        toast.error("このメンターには既にメッセージを送信しています");
      } else {
        try {
          await postMessage(memberName, message, cardDesign.id, mentorId);
          saveSentMentorData(mentorData!.id);
          toast.success("メッセージを送信しました");
          onClose();
        } catch (e) {
          toast.error("メッセージの送信に失敗しました");
        }
      }
    };
  };

  return (
    <>
    <div className={styles["modal-form"]}>
      <div
        className={styles["modal-form-container"]}
        style={isImgModalOpen || isDraftModalOpen ? { display: "none" } : { display: "flex" }}
      >
        <div className={styles["close-button"]} onClick={handleClose}>
          <RxCross2 />
        </div>
        <div className={styles['top-left-menu-button']} onClick={handleDraftModal}>
          下書き
        </div>
        <p className={styles['modal-title']}><span>{mentorData?.name}</span>へ</p>
        <div className={styles['index-container']}>
          <div className={styles['input-container']}>
            <div className={styles['input-top-box']}>
              <p className={styles['input-top-title']}>From</p>
              <TextLengthGauge textLength={memberName.length} maxLength={30} />
            </div>
            <div className={styles["input-box"]}>
              <input
                type="text"
                className={styles["input"]}
                placeholder="メンバー名を入力"
                maxLength={50}
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
              />
            </div>
          </div>
          <div className={styles['input-container']}>
            <div className={styles['input-top-box']}>
              <p className={styles['input-top-title']}>Message</p>
              <TextLengthGauge textLength={message.length} maxLength={1200} />
            </div>
            <div className={styles["textarea-box"]}>
              <textarea
                className={styles["textarea"]}
                placeholder="メッセージを800文字以内で入力"
                maxLength={1500}
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
            {cardDesign !== null ? (
              <>
              <div className={styles['img-info-box']}>
                <Image src={cardDesign.image} alt={cardDesign.name} width={50} className={styles['img-info-image']} />
                <p className={styles['img-info-name']}>{cardDesign.name}</p>
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
          {(memberName.trim() === "" || message.trim() === "" || cardDesign === null) ? (
            <div className={styles['send-disable-button']}>
              メッセージを送信
            </div>
          ) : (
            <div className={styles['send-button']} onClick={handleSubmit}>
              メッセージを送信
            </div>
          )}
        </div>
      </div>
    </div>
    <div className={styles["modal-bg-black"]} onClick={handleClose} />
    {isImgModalOpen && (
      <ImageFormModal
        designNumber={cardDesign ? cardDesign.id : 0}
        onClose={handleImgModal}
        setCardDesign={handleCardDesign}
      />
    )}
    {isDraftModalOpen && (
      <MessageDraftModal
        onClose={handleDraftModal}
        onSelect={setDraftMessage}
      />
    )}
    {isCheckModalOpen && (
      <CloseCheckModal
        onClose={handleCheckModal}
        onAllClose={onClose}
        onSave={saveMessage}
      />
    )}
    </>
  );
};
