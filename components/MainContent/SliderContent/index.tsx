import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Mousewheel, Navigation, FreeMode } from 'swiper';

import { DATA_SLIDER } from 'constants/dataSlider';

import styles from './styles.module.css';

export default function SliderContent() {
  return (
    <section className={styles.sliderContainer}>
      <div>
        <Swiper
          direction={'horizontal'}
          navigation={true}
          autoHeight={false}
          slidesPerView={'auto'}
          spaceBetween={15}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Navigation, FreeMode]}
          className={styles.mySwiper}>
          {DATA_SLIDER.map((item) => {
            return (
              <SwiperSlide className={styles.swiperSlide} key={item.id}>
                {item.title}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
