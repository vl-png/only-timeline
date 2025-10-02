import styles from './index.module.scss';

export const SliderCard = ({ year, description }: { year: number; description: string }) => (
  <article className={styles.card}>
    <h3>{year}</h3>
    <p>{description}</p>
  </article>
);
