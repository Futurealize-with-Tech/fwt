'use client'

import { motion } from "framer-motion";
import styles from './modal.module.scss';

export default function LoadingModal() {
  return (
    <div className={styles['non-container']}>
      <motion.div
          className={styles['progress-bar']}
          initial={{scaleX: 0}}
          animate={{scaleX: [0, 1]}}
          transition={{duration: 1.5, type: 'spring', repeat: Infinity}}
      />
  </div>
  );
}
