export function getAngle(index: number, total: number): number {
  if (total <= 0) return 0;
  return (index / total) * 360;
}

export const swiperBreakpoints = {
  320: { slidesPerView: 1.5, spaceBetween: 25 },
  768: { slidesPerView: 2, spaceBetween: 40 },
  1024: { slidesPerView: 3, spaceBetween: 80 }
};
