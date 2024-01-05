import MentorIndex from '@/components/Home/MentorIndex';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles['container']}>
      <MentorIndex />
    </div>
  )
}
