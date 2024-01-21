import React from 'react';
import styles from './page.module.scss';
import MentorIndex from '@/components/Home/MentorIndex';
import { MentorType } from '@/types/mentorType';

async function getMentorsData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/mentors`);

    const data = await res.json();
    return data.mentors as MentorType[];
}

export default async function Home() {
    const mentorsData = await getMentorsData();

    return (
        <div className={styles['container']}>
            <MentorIndex mentorsData={mentorsData} />
        </div>
    )
}
