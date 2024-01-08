'use client'

import { useState } from 'react';
import styles from './home.module.scss';
import MentorGridBox from '../Mentor/MentorGridBox';
import { mentors } from '@/lib/data/mentors';
import NarrowMentorButton from '../UI/Button/Mentor/NarrowMentorButton';
import { returnMentorByCategory, returnMentorByRegion } from '@/lib/Function/Mentor/returnMentor';

export default function MentorIndex() {
    const [selectRegion, setSelectRegion] = useState('');
    const [selectCourses, setSelectCourses] = useState([]);

    const mentorIndex = mentors.filter((item) => {
        if (returnMentorByCategory(selectCourses, item) && returnMentorByRegion(selectRegion, item)) {
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
                    selectRegion={selectRegion}
                    setSelectRegion={setSelectRegion}
                />
            </div>
            <div className={styles['mentor-grid-container']}>
                {mentorIndex.map((item) => (
                    <MentorGridBox
                        key={item.name}
                        name={item.name}
                        image={item.image}
                        courses={item.course}
                        region={item.region}
                    />
                ))}
            </div>
        </div>
    );
}
