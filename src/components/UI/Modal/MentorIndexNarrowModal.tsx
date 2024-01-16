'use client'

import React, { SetStateAction } from 'react';
import styles from './modal.module.scss';
import { RxCross2 } from 'react-icons/rx';
import SelectCourseBox from '@/components/Course/SelectCourseBox';
import { courses } from '@/lib/data/Course/courses';
import { regions } from '@/lib/data/Region/regions';
import SelectRegionBox from '@/components/Region/SelectRegionBox';

export default function MentorIndexNarrowModal({
    selectCourses, setSelectCourses, selectRegions, setSelectRegions, onClose
}: {
    selectCourses: string[],
    setSelectCourses: React.Dispatch<SetStateAction<string[]>>,
    selectRegions: string[],
    setSelectRegions: React.Dispatch<SetStateAction<string[]>>,
    onClose: () => void,
}) {
    const handleCoursesSelect = (name: string) => {
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

    const handleRegionsSelect = (name: string) => {
        if (name === 'all') {
            setSelectRegions([]);
        } else {
            if (selectRegions.includes(name)) {
                setSelectRegions(
                    selectRegions.filter((item) => item !== name)
                );
            } else {
                setSelectRegions([...selectRegions, name]);
            };
        };
    };

    const isCourseSelect = (name: string) => {
        if (selectCourses.length === 0 && name === 'all') {
            return true;
        } else if (selectCourses.includes(name)) {
            return true;
        } else {
            return false;
        };
    };

    const isRegionSelect = (name: string) => {
        if (selectRegions.length === 0 && name === 'all') {
            return true;
        } else if (selectRegions.includes(name)) {
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
                    {regions.map((item) => (
                        <SelectRegionBox
                            key={item.name}
                            name={item.nameText}
                            color={item.color}
                            isSelect={isRegionSelect(item.name)}
                            setRegions={() => handleRegionsSelect(item.name)}
                        />
                    ))}
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
                                isSelect={isCourseSelect(item.name)}
                                setCourses={() => handleCoursesSelect(item.name)}
                            />
                        )
                    })}
                    </div>
                </div>
                <div className={styles['finish-button']} onClick={onClose}>完了</div>
            </div>
        </div>
        <div className={styles['modal-bg-pink']} onClick={onClose} />
        </>
    );
};
