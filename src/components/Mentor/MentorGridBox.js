'use client'

import styles from './mentor.module.scss';

export default function MentorGridBox(props) {
    const {name, image} = props;

    return (
        <div className={styles['container']}>
            <img src={image} alt={name} className={styles['icon-image']} />
            <div className={styles['under-box']}>
                <p className={styles['name']}>{name}</p>
            </div>
        </div>
    );
}
