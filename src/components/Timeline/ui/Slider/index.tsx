import styles from './index.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import type { EventType } from '../../model/types';
import { swiperBreakpoints } from '../../model/helpers';
import { SliderCard } from '../SliderCard';

export const Slider = ({ events }: { events: EventType[] }) => {
  return (
    <div className={styles.sliderWrap}>
      <div className={styles.slider}>
        <Swiper
          modules={[Navigation, A11y]}
          navigation={{ nextEl: '.swiper_button_right', prevEl: '.swiper_button_left' }}
          watchOverflow={false}
          slidesPerView={'auto'}
          breakpoints={swiperBreakpoints}
        >
          {events.map((ev, index) => (
            <SwiperSlide key={index}>
              <SliderCard year={ev.year} description={ev.description} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper_button_left swiper_button" aria-label="Предыдущая страница">
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0.999999L2 6L7 11" stroke="#3877EE" strokeWidth="2" />
        </svg>
      </div>
      <div className="swiper_button_right swiper_button" aria-label="Следующая страница">
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};