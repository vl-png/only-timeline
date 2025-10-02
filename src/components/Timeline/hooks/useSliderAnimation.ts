import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import type { EventType } from '../model/types';

export const useSliderAnimation = (nextEvents: EventType[]) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [displayedEvents, setDisplayedEvents] = useState<EventType[]>(nextEvents);
  const isInitial = useRef(true);

  useEffect(() => {
    const sliderElement = sliderRef.current;
    if (!sliderElement) {
      setDisplayedEvents(nextEvents);
      return;
    }

    if (isInitial.current) {
      isInitial.current = false;
      setDisplayedEvents(nextEvents);
      gsap.set(sliderElement, { opacity: 1 });
      return;
    }

    gsap.killTweensOf(sliderElement);
    gsap.to(sliderElement, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out',
      onComplete: () => {
        setDisplayedEvents(nextEvents);
        requestAnimationFrame(() => {
          gsap.to(sliderElement, { opacity: 1, duration: 0.8, ease: 'power2.out' });
        });
      }
    });
  }, [nextEvents]);

  return { sliderRef, displayedEvents };
};
