import type { CSSProperties } from 'react';
import styles from './index.module.scss';
import { getAngle } from '../../model/helpers';
import { useRingRotation } from '../../hooks';
import { RingDot } from '../RingDot';

type RingProps = { count: number; active: number; onSelect: (i: number) => void; labels?: string[] };

export const Ring = ({ count, active, onSelect, labels }: RingProps) => {
  const { containerRef } = useRingRotation(active, count);

  return (
    <div
      ref={containerRef}
      className={styles.ring}
      role="tablist"
      aria-label="Сегменты"
      style={{ '--r': `265px` } as CSSProperties}
    >
      {Array.from({ length: count }).map((_, index) => {
        const angle = getAngle(index, count);
        const isActive = index === active;
        return (
          <RingDot
            key={index}
            index={index}
            angle={angle}
            isActive={isActive}
            label={labels?.[index]}
            count={count}
            onSelect={onSelect}
          />
        );
      })}
    </div>
  );
};
