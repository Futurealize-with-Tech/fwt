'use client'

import Image from 'next/image';
import styles from './course.module.scss';

export default function SelectCourseBox({
    icon, name, nameText, isSelect, setCourses,
}: {
    icon?: string, name: string, nameText: string, isSelect: boolean, setCourses: () => void,
}) {

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
