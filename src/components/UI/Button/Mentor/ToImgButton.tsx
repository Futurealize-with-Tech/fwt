"use client";

import { useState } from "react";
import { MemberFormModal } from "../../Modal/MemberFormModal";

export default function ToImageButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div onClick={handleModal}></div>
    </>
  );
}
