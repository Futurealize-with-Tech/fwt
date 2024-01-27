'use client'

import styles from './gauge.module.scss';
import { motion } from 'framer-motion';

export default function TextLength({
    textLength,
    maxLength,
}: {
    textLength: number,
    maxLength: number,
}) {
    const underCircleStyle = () => {
        if (textLength < maxLength - 10) {
            return {stroke: 'rgba(var(--primary-pink), 0.3)'};
        } else if (textLength < maxLength) {
            return {stroke: 'rgba(var(--yellow), 0.3)'};
        } else if (textLength >= maxLength) {
            return {stroke: 'rgba(var(--red), 0.3)'};
        };
    };

    return (
        <div
            className={styles['container']}
            style={textLength === 0 ? {display: 'none'} : {display: 'block'}}
        >
            <svg
                className={styles['svg']}
            >
                <circle
                    className={styles['circle-under']}
                    style={underCircleStyle()}
                />
            {textLength < maxLength ? (
                <motion.circle
                    className={styles['circle-top']}
                    animate={{
                        pathLength: textLength / maxLength,
                    }}
                    initial={false}
                />
            ) : (
                <circle
                    className={styles['invalid-circle']}
                />
            )}
            </svg>
            {textLength >= maxLength - 10 && (
                <div className={styles['count-box']}>
                    <div
                        className={styles['count']}
                        style={textLength >= maxLength ? {color: 'rgb(var(--red))'} : {color: 'rgb(var(--yellow))'}}
                    >
                        {maxLength - textLength}
                    </div>
                </div>
            )}
        </div>
    );
};
