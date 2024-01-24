'use client'

import { useState } from 'react';
import styles from './mentorButton.module.scss';
import MemberFormModal from '../../Modal/MemberFormModal';

export default function SendMessageButton({id}: {id: number}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
        <div className={styles['send-message-button']} onClick={handleModal}>
            メッセージを送る
        </div>
        {isModalOpen && (
            <MemberFormModal id={id} onClose={handleModal} />
        )}
        </>
    );
}
