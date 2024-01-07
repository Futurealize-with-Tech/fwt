import styles from "./memberform.module.scss";
import React, { useState, useEffect } from "react";
import { supabase } from "../../../utils/supabase";
import { postMessage } from "../../../utils/supabasePostFunctions";

export const MemberFormModal = ({ buttonLabel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [memberName, setmemberName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //追加
    await postMessage(memberName, message);

    setmemberName("");
    setMessage("");
  };
  // useEffect(() => {
  //   const getName = async () => {};
  // }, []);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button onClick={toggleModal}>{buttonLabel}</button>
      {isOpen && (
        <div className={styles["overly"]}>
          <form onSubmit={handleSubmit} className={styles["content"]}>
            <div>
              <p>TO</p>
              <p>(メンター名)</p>
              <div className={styles["container"]}>
                <p>FROM</p>
                <input
                  type="text"
                  className={styles["name-textform"]}
                  placeholder="メンバー名を入力"
                  value={memberName}
                  onChange={(e) => setmemberName(e.target.value)}
                />
              </div>
              <div className={styles["container"]}>
                <p>MESSAGE</p>
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  className={styles["message-textform"]}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              {/* <input type="submit" value="送信" /> */}
              <input
                className={styles["toImgBtn"]}
                value="画像デザインを選択"
              />
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
      )}
    </>
  );
};
