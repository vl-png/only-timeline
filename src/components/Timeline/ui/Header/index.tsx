import styles from './index.module.scss';

export const Header = () => (
  <div className={styles.header}>
    <div className={styles.accent} />
    <h1 className={styles.title}> Исторические<br />даты</h1>
  </div>
);
