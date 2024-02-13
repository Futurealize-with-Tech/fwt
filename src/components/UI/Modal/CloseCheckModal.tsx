'use client'

import styles from './modal.module.scss';

export default function CloseCheckModal({
    onClose,
    onAllClose,
    onSave,
}: {
    onClose: () => void,
    onAllClose: () => void,
    onSave: () => void,
}) {
    return (
        <>
        <div className={styles['small-modal-form']}>
            <div className={styles['text-container']}>
                <p className={styles['modal-title']}>メッセージを保存しますか？</p>
                <p className={styles['sub-text']}>
                    下書きに保存して、後で送信できます。
                </p>
            </div>
            <div className={styles['send-button']} onClick={onSave}>
                保存
            </div>
            <div className={styles['trash-button']} onClick={onAllClose}>
                破棄
            </div>
        </div>
        <div className={styles['modal-bg-check']} onClick={onClose} />
        </>
    );
};
