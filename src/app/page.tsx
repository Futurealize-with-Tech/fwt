import React from 'react';
import styles from './page.module.scss';
import MentorIndex from '@/components/Home/MentorIndex';

export default function Home() {
  return (
    <div className={styles['container']}>
      <MentorIndex />
    </div>
  )
}
