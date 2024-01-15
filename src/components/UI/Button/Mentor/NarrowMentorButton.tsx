'use client'

import React, { SetStateAction, useState } from 'react';
import styles from './mentorButton.module.scss';
import MentorIndexNarrowModal from '../../Modal/MentorIndexNarrowModal';
import { FiPlusCircle } from "react-icons/fi";

export default function NarrowMentorButton({
    selectCourses, setSelectCourses, selectRegions, setSelectRegions
}: {
    selectCourses: string[],
    setSelectCourses: React.Dispatch<SetStateAction<string[]>>,
    selectRegions: string[],
    setSelectRegions: React.Dispatch<SetStateAction<string[]>>,
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
        <div className={styles['narrow-button-bg']} onClick={handleModal}>
            <div className={styles['narrow-button']}>
                <FiPlusCircle />
                検索条件
            </div>
        </div>
        {isModalOpen && (
            <MentorIndexNarrowModal
                selectCourses={selectCourses}
                setSelectCourses={setSelectCourses}
                selectRegions={selectRegions}
                setSelectRegions={setSelectRegions}
                onClose={handleModal}
            />
        )}
        </>
    );
}
