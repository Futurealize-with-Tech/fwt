'use client'

import { useContext, useEffect, useState } from 'react';
import styles from './draftModal.module.scss';
import modalStyles from './modal.module.scss';
import { IoArrowBackOutline } from 'react-icons/io5';
import { returnDraftMessages } from '@/lib/Function/Message/returnDraftMessages';
import { MentorsDataContext } from '@/middleware/MentorsDataProvider';
import { returnMentorData } from '@/lib/Function/Mentor/returnMentorData';
import { DraftMessageType } from '@/types/draftMessageType';
import { deleteDraftMessage } from '@/lib/Function/Message/deleteDraftMessage';

export default function MessageDraftModal({
    onClose,
    onSelect,
}: {
    onClose: () => void,
    onSelect: (id: number, body?: string, from?: string, cardDesign?: number) => void,
}) {
    const [draftMessages, setDraftMessages] = useState<DraftMessageType[]>([]);
    const [selectMode, setSelectMode] = useState(false);
    const [selectIds, setSelectIds] = useState<string[]>([]);
    const mentorsData = useContext(MentorsDataContext);

    const handleSelectMode = () => {
        setSelectMode(!selectMode);
    };

    const handleSelectMessage = (id: string) => {
        if (selectIds.includes(id)) {
            setSelectIds(selectIds.filter((item) => item !== id));
        } else {
            setSelectIds([...selectIds, id]);
        };
    };

    const handleClick = (id: string, mentorId: number, body?: string, from?: string, cardDesign?: number) => {
        if (selectMode) {
            handleSelectMessage(id);
        } else {
            onSelect(mentorId, body, from, cardDesign);
        };
    };

    const handleSelect = () => {
        if (selectIds.length === 0) {
            let draftMessageIds: string[] = [];
            for (let i = 0;i < draftMessages.length;i++) {
                draftMessageIds.push(draftMessages[i].id);
            };

            setSelectIds(draftMessageIds);
        } else {
            setSelectIds([]);
        };
    };

    const handleDeleteDraftMessage = () => {
        deleteDraftMessage(selectIds);
        const localDraftMessages = returnDraftMessages();
        setDraftMessages(localDraftMessages);
        setSelectIds([]);
    };

    useEffect(() => {
        const localDraftMessages = returnDraftMessages();
        setDraftMessages(localDraftMessages);
    }, []);

    return (
        <div className={modalStyles['modal-form']}>
            <div className={modalStyles['modal-form-cushion']}>
                <div className={modalStyles['modal-header']}>
                    <div className={modalStyles['modal-header-container']}>
                        <div className={modalStyles['before-button']} onClick={onClose}>
                            <IoArrowBackOutline />
                        </div>
                        {draftMessages.length > 0 && (
                            <div
                                className={modalStyles['top-right-menu-button']}
                                onClick={handleSelectMode}
                            >
                            {selectMode ? '完了' : '編集'}
                            </div>
                        )}
                        <p className={modalStyles['modal-title']}>下書き</p>
                    </div>
                </div>
                <div
                    className={modalStyles['modal-form-container']}
                    style={{padding: 0}}
                >
                    <div className={styles['message-index']}>
                    {draftMessages.map((item) => {
                        return (
                            <div
                                className={styles['message-container']}
                                onClick={() => handleClick(item.id, item.mentorId, item.body, item.from, item.cardDesign)}
                                key={item.mentorId}
                            >
                            {selectMode && (
                                <div className={styles['checkbox-container']}>
                                    <input
                                        type='checkbox'
                                        className={styles['checkbox']}
                                        checked={selectIds.includes(item.id)}
                                        onClick={() => handleSelectMessage(item.id)}
                                    />
                                </div>
                            )}
                                <div className={styles['message-contents-box']}>
                                    <p className={styles['text-box']}>
                                        <span>To</span>
                                        {returnMentorData(mentorsData, item.mentorId)?.name}
                                    </p>
                                    <p className={styles['text-box']}>
                                        <span>From</span>
                                        {item.from}
                                    </p>
                                    <p className={styles['text-box']}>
                                        <span>Message</span>
                                    </p>
                                    <p className={styles['text-box']}>{item.body}</p>
                                </div>
                            </div>
                        )
                    })}
                    {draftMessages.length === 0 && (
                        <div className={styles['non-message-box']}>下書きがありません！</div>
                    )}
                    </div>
                </div>
                {selectMode && (
                    <div className={styles['modal-footer']}>
                        <div className={styles['modal-footer-container']}>
                            <div className={styles['select-button']} onClick={handleSelect}>
                            {selectIds.length === 0 ? '全て選択' : '選択を解除'}
                            </div>
                        {selectIds.length > 0 ? (
                            <div className={styles['delete-button']} onClick={handleDeleteDraftMessage}>
                                削除
                            </div>
                        ) : (
                            <div className={styles['delete-button-disable']}>削除</div>
                        )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
