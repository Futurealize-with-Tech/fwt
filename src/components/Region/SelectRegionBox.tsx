'use client'

import styles from './region.module.scss';

export default function SelectRegionBox({
    color, name, isSelect, setRegions,
}: {
    color: string,
    name: string,
    isSelect: boolean,
    setRegions: () => void,
}) {
    return (
        <div
            className={styles['select-container']}
            onClick={setRegions}
            style={isSelect ? {borderColor: 'rgb(var(--primary-pink))'} : {}}
        >
            <div className={styles['circle']} style={{backgroundColor: `rgb(${color})`}} />
            <p className={styles['text']}>{name}</p>
        </div>
    );
}
