export type EventType = {
  year: number;
  description: string;
};

export type SegmentType = {
  from: number;
  to: number;
  category: string;
  events: EventType[];
};

export type TimelineProps = {
  id?: string;
  segments?: SegmentType[];
  initialIndex?: number;
  className?: string;
};
