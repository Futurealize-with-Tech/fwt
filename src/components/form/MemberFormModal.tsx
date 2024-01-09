import styles from "./memberform.module.scss";
import React, { useState, useEffect } from "react";
import { supabase } from "../../../utils/supabase";
import { postMessage } from "../../../utils/supabasePostFunctions";
import { HiArrowCircleRight } from "react-icons/hi";

export const MemberFormModal = () => {
  const [isOpen, setIsOpen] = useState(false);
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
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button onClick={toggleModal}>メッセージを送る</button>
      {isOpen && (
        <div className={styles["overly"]}>
          <div className={styles["content"]}>
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
                    onClick={() => setIsOpen(!isOpen)}
                    className={styles["cancelBtn"]}
                  >
                    キャンセル
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
