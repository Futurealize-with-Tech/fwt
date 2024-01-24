'use client'

import Image from 'next/image';
import styles from './course.module.scss';
import { returnCourse } from '@/lib/Function/returnCourse';

export default function CourseBox({kind}: {kind: string}) {
    const courseData = returnCourse(kind);

    return (
        <div className={styles['container']}>
            <Image src={courseData.icon} alt={courseData.name} className={styles['icon']} width={50} />
            <p className={styles['text']}>{courseData.name}</p>
        </div>
    );
}
