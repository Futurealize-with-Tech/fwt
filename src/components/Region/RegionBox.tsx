'use client'

import styles from './region.module.scss';
import { returnRegion } from '@/lib/Function/returnRegion';

export default function RegionBox({kind}: {kind: string}) {
    const regionData = returnRegion(kind);

    return (
        <div className={styles['container']} style={{backgroundColor: `rgba(${regionData.color}, 0.3)`}}>
            <div className={styles['circle']} style={{backgroundColor: `rgb(${regionData.color})`}} />
            <p className={styles['text']}>{regionData.name}</p>
        </div>
    );
}
