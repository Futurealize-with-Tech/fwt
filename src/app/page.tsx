import styles from './page.module.scss';
import MentorIndex from '@/components/Home/MentorIndex';
import { mentors } from '@/lib/data/mentors';
import MentorsDataProvider from '@/middleware/MentorsDataProvider';
import { MentorType } from '@/types/mentorType';
import { mentors } from '@/lib/data/mentors';

// async function getMentorsData() {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/mentors`);

//     const data = await res.json();
//     return data.mentors as MentorType[];
// }

export default async function Home() {
    // const mentorsData = await getMentorsData();
    // const mentorsData = mentors;

    return (
        <div className={styles['container']}>
            <MentorsDataProvider mentors={mentors}>
                <MentorIndex mentorsData={mentors} />
            </MentorsDataProvider>
        </div>
    )
}
