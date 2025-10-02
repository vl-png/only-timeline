import { useMemo, useState } from 'react';
import type { SegmentType } from '../model/types';

export const useTimelineState = (segments: SegmentType[], initialIndex: number) => {
  const data = useMemo((): SegmentType[] => {
    if (!segments || segments.length === 0) return [];
    return segments.slice(0, 6);
  }, [segments]);

  const [activeIndex, setActiveIndex] = useState(
    Math.min(initialIndex, Math.max(0, data.length - 1))
  );

  const current = data[activeIndex];

  return { data, activeIndex, setActiveIndex, current };
};
