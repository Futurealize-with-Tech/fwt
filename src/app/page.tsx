import styles from './page.module.scss';
import MentorIndex from '@/components/Home/MentorIndex';
import MentorsDataProvider from '@/middleware/MentorsDataProvider';
import { MentorType } from '@/types/mentorType';

async function getMentorsData() {
    const res = await fetch('/mentors');

    const data = await res.json();
    return data.mentors as MentorType[];
}

export default async function Home() {
    const mentorsData = await getMentorsData();

    return (
        <div className={styles['container']}>
            <MentorsDataProvider mentors={mentorsData}>
                <MentorIndex mentorsData={mentorsData} />
            </MentorsDataProvider>
        </div>
    )
}
