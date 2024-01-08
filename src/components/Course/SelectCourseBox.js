'use client'

import Image from 'next/image';
import styles from './course.module.scss';

export default function SelectCourseBox(props) {
    const {icon, name, nameText, isSelect, setCourses} = props;

    return (
        <div
            className={styles['select-container']}
            onClick={setCourses}
            style={isSelect ? {borderColor: 'rgb(var(--primary-pink))'} : {}}
        >
        {icon && <Image src={icon} alt={name} className={styles['icon']} width={50} />}
            <p className={styles['text']}>{nameText}</p>
        </div>
    );
}
