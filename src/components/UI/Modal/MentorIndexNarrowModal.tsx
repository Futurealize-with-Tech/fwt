'use client'

import React, { SetStateAction } from 'react';
import styles from './modal.module.scss';
import { RxCross2 } from 'react-icons/rx';
import SelectCourseBox from '@/components/Course/SelectCourseBox';
import { courses } from '@/lib/data/Course/courses';

export default function MentorIndexNarrowModal({
    selectCourses, setSelectCourses, selectRegion, setSelectRegion, onClose
}: {
    selectCourses: string[],
    setSelectCourses: React.Dispatch<SetStateAction<string[]>>,
    selectRegion: string,
    setSelectRegion: React.Dispatch<SetStateAction<string>>,
    onClose: () => void,
}) {
    const handleSelect = (name: string) => {
        if (name === 'all') {
            setSelectCourses([]);
        } else {
            if (selectCourses.includes(name)) {
                setSelectCourses(
                    selectCourses.filter((item) => item !== name)
                );
            } else {
                setSelectCourses([...selectCourses, name]);
            };
        };
    };

    const isSelect = (name: string) => {
        if (selectCourses.length === 0 && name === 'all') {
            return true;
        } else if (selectCourses.includes(name)) {
            return true;
        } else {
            return false;
        };
    };

    return (
        <>
        <div className={styles['modal-form']}>
            <div className={styles['modal-form-container']}>
                <div className={styles['close-button']} onClick={onClose}>
                    <RxCross2 />
                </div>
                <p className={styles['modal-title']}>条件をしぼる</p>
                <div className={styles['index-container']}>
                    <p className={styles['index-title']}>地域から検索</p>
                    <div className={styles['select-index']}>
                    {}
                    </div>
                </div>
                <div className={styles['index-container']}>
                    <p className={styles['index-title']}>コースから検索</p>
                    <div className={styles['select-index']}>
                    {courses.map((item) => {
                        return (
                            <SelectCourseBox
                                key={item.name}
                                icon={item.icon}
                                name={item.name}
                                nameText={item.nameText}
                                isSelect={isSelect(item.name)}
                                setCourses={() => handleSelect(item.name)}
                            />
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
        <div className={styles['modal-bg-pink']} onClick={onClose} />
        </>
    );
};
