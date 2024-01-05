'use client'

import styles from './home.module.scss';

export default function MentorIndex() {
    return (
        <div className={styles['container']}>
            <div className={styles['title-container']}>
                <p className={styles['title']}>卒業メンター一覧</p>
                <p className={styles['title-description']}>
                    メッセージを送りたいメンターを選択してください。
                </p>
            </div>
            <div className={styles['mentor-grid-container']}>
            </div>
        </div>
    );
}
