import styles from './index.module.scss';
import { NavigationButton } from '../NavigationButton';

type ControlsProps = { index: number; total: number; onPrev: () => void; onNext: () => void; onSelect?: (index: number) => void };

export const Controls = ({ index, total, onPrev, onNext, onSelect }: ControlsProps) => (
  <div className={styles.controls}>
    <div className={styles.counter}>
      {String(index + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
    </div>
    <div className={styles.nav}>
      <NavigationButton direction="prev" onClick={onPrev} disabled={index <= 0} />
      <NavigationButton direction="next" onClick={onNext} disabled={index >= total - 1} />
    </div>
    <ul className={styles.pagination} role="tablist" aria-label="Пагинация сегментов">
      {Array.from({ length: total }).map((_, segmentIndex) => (
        <li key={segmentIndex}>
          <button
            type="button"
            className={`${styles.dot} ${segmentIndex === index ? styles.active : ''}`}
            role="tab"
            aria-selected={segmentIndex === index}
            aria-label={`Сегмент ${segmentIndex + 1}`}
            onClick={() => onSelect?.(segmentIndex)}
          />
        </li>
      ))}
    </ul>
  </div>
);