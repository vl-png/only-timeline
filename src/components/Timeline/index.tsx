 import styles from './index.module.scss';
import type { TimelineProps } from './model/types';
import { demoSegments } from './model/mocks';
import { useTimelineState } from './hooks';
import { Header } from './ui/Header';
import { Ring } from './ui/Ring';
import { BigYears } from './ui/BigYears';
import { Controls } from './ui/Controls';
import { Slider } from './ui/Slider';
import { useSliderAnimation } from './hooks';

export const Timeline = ({
  id = 'timeline',
  segments,
  initialIndex = 0,
  className
}: TimelineProps) => {
  const src = segments && segments.length ? segments : demoSegments;
  const { data, activeIndex, setActiveIndex, current } = useTimelineState(src, initialIndex);
  const { sliderRef, displayedEvents } = useSliderAnimation(current.events);

  return (
    <section className={`${styles.wrap} ${className ?? ''}`} aria-label={`timeline-${id}`}>
      <Header />

      <div className={styles.topRow}>
        <div className={styles.ringArea}>
          <div className={styles.ellipse}></div>
          <Ring
            count={data.length}
            active={activeIndex}
            onSelect={setActiveIndex}
            labels={data.map((s) => s.category)}
          />
          <BigYears from={current.from} to={current.to} />
        </div>
      </div>

      <div className={styles.bottomRow}>
        <Controls
          index={activeIndex}
          total={data.length}
          onPrev={() => setActiveIndex((p) => Math.max(0, p - 1))}
          onNext={() => setActiveIndex((p) => Math.min(data.length - 1, p + 1))}
          onSelect={(i: number) => setActiveIndex(i)}
        />
        <div ref={sliderRef}>
          <Slider events={displayedEvents} />
        </div>
      </div>
    </section>
  );
};