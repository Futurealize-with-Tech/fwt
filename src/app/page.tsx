import styles from './page.module.scss';
import MentorIndex from '@/components/Home/MentorIndex';
import MentorsDataProvider from '@/middleware/MentorsDataProvider';
import { MentorType } from '@/types/mentorType';
import TopLogo from '@/public/app/fwt-logo.png';
import Image from 'next/image';

async function getMentorsData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/mentors`);

    const data = await res.json();
    return data.mentors as MentorType[];
}

export default async function Home() {
    const mentorsData = await getMentorsData();

    return (
        <div className={styles['container']}>
            <div className={styles['top-container']}>
                <div className={styles['top-text-container']}>
                    <Image src={TopLogo} alt='logo' width={300} className={styles['top-image-mini']} />
                    <p className={styles['top-title']}>
                        卒業メンターにメッセージを送ろう！！
                    </p>
                    <p className={styles['top-description']}>
                        ただの卒業では終わらせない、最高のサプライズを！！
                        <br />
                        卒業メンターさんに、今までの感謝などをメッセージで送ることができます。
                        <br />
                        今までお世話になった色んな卒業メンターさん達に、
                        <br />
                        たくさんメッセージを送りましょう！！
                    </p>
                </div>
                <Image src={TopLogo} alt='logo' width={400} className={styles['top-image']} />
            </div>
            <MentorsDataProvider mentors={mentorsData}>
                <MentorIndex mentorsData={mentorsData} />
            </MentorsDataProvider>
        </div>
    )
}
