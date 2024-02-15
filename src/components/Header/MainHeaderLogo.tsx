'use client'

import styles from './header.module.scss';
import Image from 'next/image';
import TitleLogoImage from '@/public/app/fwt-title.png';
import LogoImage from '@/public/app/fwt-logo-white.png';

export default function MainHeaderLogo() {
    return (
        <>
        <Image src={TitleLogoImage} alt='Featureaize with Tech！' width={200} className={styles['title-logo-image']} />
        {/* <Image src={LogoImage} alt='Featureaize with Tech！' width={200} className={styles['logo-image']} /> */}
        </>
    );
};
