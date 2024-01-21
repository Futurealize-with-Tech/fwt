"use client";

import { useState } from "react";
import { ImageFormModal } from "../../Modal/imgFormModal";

export default function ToImageButton({
  id,
  memberName,
  message
}: {
  id: number,
  memberName: string,
  message: string
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div onClick={handleModal}>画像デザインを選択</div>
      {isModalOpen && (
                    <ImageFormModal
                    id={id}
                    memberName={memberName}
                    message={message}
                    onClose={() => handleModal}
                  />
    )}
    </>
  );
}
