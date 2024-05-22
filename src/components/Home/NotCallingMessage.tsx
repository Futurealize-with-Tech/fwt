import styles from './home.module.scss';

export default function NotCallingMessage() {
  return (
    <div className={styles['not-container']}>
      <p className={styles['not-thanks-text']}>Thank you!!</p>
      <p className={styles['not-description']}>
        今年の募集は終了しました！！<br />
        おかげさまでたくさんのメッセージが集まりました！！！<br />
        本当にありがとうございました！！！
      </p>
      <p className={styles['not-last-text']}>To be continued?</p>
    </div>
  );
}
