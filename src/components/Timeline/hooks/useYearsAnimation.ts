import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useYearsAnimation = (from: number, to: number) => {
  const leftRef = useRef<HTMLSpanElement>(null);
  const rightRef = useRef<HTMLSpanElement>(null);
  const prevFromRef = useRef<number>(from);
  const prevToRef = useRef<number>(to);

  useEffect(() => {
    const leftYearElement = leftRef.current;
    const rightYearElement = rightRef.current;
    if (!leftYearElement || !rightYearElement) return;

    leftYearElement.textContent = String(prevFromRef.current);
    rightYearElement.textContent = String(prevToRef.current);

    gsap.killTweensOf([leftYearElement, rightYearElement]);

    const timeline = gsap.timeline();
    timeline.fromTo(
      leftYearElement,
      { innerText: prevFromRef.current },
      { innerText: from, duration: 1, ease: 'power2.out', snap: { innerText: 1 } },
    );

    timeline.fromTo(
      rightYearElement,
      { innerText: prevToRef.current },
      { innerText: to, duration: 1, ease: 'power2.out', snap: { innerText: 1 } },
      0,
    );

    prevFromRef.current = from;
    prevToRef.current = to;

    return () => {
      timeline.kill();
    };
  }, [from, to]);

  return { leftRef, rightRef };
};
