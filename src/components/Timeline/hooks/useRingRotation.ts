import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { getAngle } from '../model/helpers';

export const useRingRotation = (active: number, count: number) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentRotationRef = useRef<number>(300 - getAngle(active, count));

  const targetRotation = useMemo(() => {
    return 300 - getAngle(active, count);
  }, [active, count]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.to(container, {
      rotate: targetRotation,
      duration: 1,
      ease: 'power3.inOut',
      onStart: () => {
        container.style.setProperty('--ring-rotation', `${targetRotation}deg`);
      },
      onUpdate: () => {
        const rotation = gsap.getProperty(container, 'rotate') as number;
        currentRotationRef.current = rotation;
        container.style.setProperty('--ring-rotation', `${rotation}deg`);
      },
      onComplete: () => {
        currentRotationRef.current = targetRotation;
      }
    });
  }, [targetRotation]);

  return { containerRef, currentRotation: currentRotationRef.current };
};
