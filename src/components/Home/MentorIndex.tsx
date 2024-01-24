'use client'

import React, { useState } from 'react';
import styles from './home.module.scss';
import MentorGridBox from '../Mentor/MentorGridBox';
import { mentors } from '@/lib/data/mentors';
import NarrowMentorButton from '../UI/Button/Mentor/NarrowMentorButton';
import { returnMentorByCategory, returnMentorByRegion } from '@/lib/Function/Mentor/returnMentor';
import { MentorType } from '@/types/mentorType';

export default function MentorIndex() {
    const [selectRegions, setSelectRegions] = useState<string[]>([]);
    const [selectCourses, setSelectCourses] = useState<string[]>([]);

    const mentorIndex: MentorType[] = mentors.filter((item) => {
        if (returnMentorByCategory(selectCourses, item) && returnMentorByRegion(selectRegions, item)) {
            return item;
        } else {
            return;
        };
    });

    return (
        <div className={styles['container']}>
            <div className={styles['top-title-container']}>
                <div className={styles['title-container']}>
                    <p className={styles['title']}>卒業メンター一覧</p>
                    <p className={styles['title-description']}>
                        メッセージを送りたいメンターを選択してください。
                    </p>
                </div>
                <NarrowMentorButton
                    selectCourses={selectCourses}
                    setSelectCourses={setSelectCourses}
                    selectRegions={selectRegions}
                    setSelectRegions={setSelectRegions}
                />
            </div>
            <div className={styles['mentor-grid-container']}>
                {mentorIndex.map((item) => (
                    <MentorGridBox
                        key={item.name}
                        mentorData={item}
                    />
                ))}
            </div>
        </div>
    );
}
