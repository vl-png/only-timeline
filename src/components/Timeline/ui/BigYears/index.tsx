import styles from './index.module.scss';
import { useYearsAnimation } from '../../hooks';

export const BigYears = ({ from, to }: { from: number; to: number }) => {
  const { leftRef, rightRef } = useYearsAnimation(from, to);

  return (
    <div className={styles.bigYears} aria-live="polite">
      <span ref={leftRef} className={styles.yearLeft}>{from}</span>
      <span ref={rightRef} className={styles.yearRight}>{to}</span>
    </div>
  );
};
