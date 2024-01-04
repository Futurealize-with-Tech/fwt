'use client'

import Image from 'next/image';
import styles from './header.module.scss';
import TitleLogoImage from '@/public/app/fwt-title.png';
import LogoImage from '@/public/app/fwt-logo-white.png';

export default function MainHeader() {
    return (
        <div className={styles['all-wrapper']}>
            <div className={styles['container']}>
                <Image src={TitleLogoImage} alt='Featureaize with Tech！' width={200} className={styles['title-logo-image']} />
                <Image src={LogoImage} alt='Featureaize with Tech！' width={200} className={styles['logo-image']} />
                <div className={styles['search-button']}>検索</div>
            </div>
        </div>
    );
}
