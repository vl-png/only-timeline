import type { CSSProperties } from 'react';
import styles from './index.module.scss';

type RingDotProps = { index: number; angle: number; isActive: boolean; label?: string; count: number; onSelect: (i: number) => void };

export const RingDot = ({ index, angle, isActive, label, count, onSelect }: RingDotProps) => (
  <button
    type="button"
    role="tab"
    aria-selected={isActive}
    aria-label={`Сегмент ${index + 1}`}
    className={`${styles.dot} ${isActive ? styles.dotActive : ''}`}
    style={{ '--angle': `${angle}deg` } as CSSProperties}
    onClick={() => onSelect(index)}
  >
    <span className={styles.point} />
    <span className={styles.badge}>
      <span className={styles.badgeLabel} data-label={label || ''}>
        {index + 1}
      </span>
    </span>
  </button>
);
