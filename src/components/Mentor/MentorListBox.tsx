'use client'

import styles from './mentor.module.scss';
import Image from 'next/image';
import MentorDefaultImage from '@/public/mentor/user_default.jpg';
import { MentorType } from '@/types/mentorType';
import { MdArrowForwardIos } from "react-icons/md";
import RegionBox from '../Region/RegionBox';
import CourseBox from '../Course/CourseBox';
import MemberFormModal from '../UI/Modal/MemberFormModal';
import { useState } from 'react';

export default function MentorListBox({
    mentorData, isSent,
}: {
    mentorData: MentorType, isSent: boolean,
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModal = () => {
        if (!isSent) {
            setIsModalOpen(!isModalOpen);
        };
    };

    return (
        <>
        <div className={styles['separate-list-box']} />
            <div
                className={styles['list-container']}
                style={{cursor: isSent ? 'default' : 'pointer'}}
                onClick={handleModal}
            >
            <div className={styles['list-left-container']}>
                <div className={styles['list-left-top-container']}>
                {mentorData.imageUrl ? (
                    <img
                        src={mentorData.imageUrl}
                        alt={mentorData.name}
                        className={styles['list-icon-img']}
                    />
                ): (
                    <Image src={MentorDefaultImage} alt={mentorData.name} className={styles['list-icon-img']} width={200} />
                )}
                <div className={styles['list-left-top-personal-box']}>
                    <p className={styles['list-personal-name']}>{mentorData.name}</p>
                    <div className={styles['list-left-top-personal-region-index']}>
                    {mentorData.regions.map((item) => (
                    <RegionBox kind={item.name} key={item.id} />
                    ))}
                    </div>
                </div>
                </div>
                <div className={styles['list-left-under-courses-index']}>
                {mentorData.courses.map((item) => (
                    <CourseBox kind={item.name} key={item.id} />
                ))}
                </div>
            </div>
            <div className={styles['right-arrow']}>
            {!isSent && (
                <MdArrowForwardIos />
            )}
            </div>
        </div>
        {isModalOpen && (
            <MemberFormModal id={mentorData.id} onClose={handleModal} />
        )}
        </>
    );
}
