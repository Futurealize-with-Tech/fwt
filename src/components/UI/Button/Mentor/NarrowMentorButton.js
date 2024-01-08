'use client'

import { useState } from 'react';
import styles from './mentorButton.module.scss';
import MentorIndexNarrowModal from '../../Modal/MentorIndexNarrowModal';
import { FiPlusCircle } from "react-icons/fi";

export default function NarrowMentorButton(props) {
    const {selectCourses, setSelectCourses, selectRegion, setSelectRegion} = props;
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
                selectRegion={selectRegion}
                setSelectRegion={setSelectRegion}
                onClose={handleModal}
            />
        )}
        </>
    );
}
