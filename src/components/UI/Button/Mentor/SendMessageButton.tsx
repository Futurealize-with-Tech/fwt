'use client'

import { useState } from 'react';
import styles from './mentorButton.module.scss';
import MemberFormModal from '../../Modal/MemberFormModal';

export default function SendMessageButton({
    id, isSent,
}: {
    id: number, isSent: boolean,
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
        {isSent ? (
            <div className={styles['disable-send-message-button']}>
                送信済みです
            </div>
        ) : (
            <div className={styles['send-message-button']} onClick={handleModal}>
                メッセージを送る
            </div>
        )}
        {isModalOpen && (
            <MemberFormModal id={id} onClose={handleModal} />
        )}
        </>
    );
}
