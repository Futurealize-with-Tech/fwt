'use client'

import styles from './mentor.module.scss';
import CourseBox from '../Course/CourseBox';

export default function MentorGridBox(props) {
    const {name, image, courses} = props;

    return (
        <div className={styles['container']}>
            <img src={image} alt={name} className={styles['icon-image']} />
            <div className={styles['under-box']}>
                <p className={styles['name']}>{name}</p>
                <div className={styles['course-index-container']}>
                    <p className={styles['course-text']}>Course</p>
                    <div className={styles['course-index']}>
                    {courses.map((item) => (
                        <CourseBox kind={item} key={item} />
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
