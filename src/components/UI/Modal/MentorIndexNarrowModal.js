'use client'

import { courses } from '@/lib/data/Course/courses';
import styles from './modal.module.scss';
import { RxCross2 } from 'react-icons/rx';
import SelectCourseBox from '@/components/Course/SelectCourseBox';

export default function MentorIndexNarrowModal(props) {
    const {selectCourses, setSelectCourses, selectRegion, setSelectRegion, onClose} = props;

    const handleSelect = (name) => {
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

    const isSelect = (name) => {
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
