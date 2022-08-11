import { useContext } from 'react';
import Layout from 'components/Layout';

import styles from './styles.module.css';
import Context from 'context/MenuContext';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import required modules
import { Mousewheel, Pagination, Navigation, FreeMode } from 'swiper';

const DATA_SLIDER = [
  {
    id: 1,
    title: 'Todo',
    action: '#Todo',
  },
  {
    id: 2,
    title: 'Mixes',
    action: '#Mixes',
  },
  {
    id: 3,
    title: 'Música',
    action: '#Musica',
  },
  {
    id: 4,
    title: 'Videojuegos',
    action: '#videojuegos',
  },
  {
    id: 5,
    title: 'Listas de reproducción',
    action: '#rep',
  },
  {
    id: 6,
    title: 'En directo',
    action: '#direct',
  },
  {
    id: 7,
    title: 'Chill out',
    action: '#chillOut',
  },
  {
    id: 8,
    title: 'Pokémon',
    action: '#pokemon',
  },
  {
    id: 9,
    title: 'Electronic Dance music',
    action: '#edm',
  },
  {
    id: 10,
    title: 'Banda sonora',
    action: '#banda',
  },
  {
    id: 11,
    title: 'Programa informático',
    action: '#programa',
  },
  {
    id: 12,
    title: 'Manga',
    action: '#manga',
  },
  {
    id: 13,
    title: 'Rock alternativo',
    action: '#rock',
  },
  {
    id: 14,
    title: 'Pódcast',
    action: '#podcast',
  },
  {
    id: 15,
    title: 'Música japonesa',
    action: '#japonesa',
  },
  {
    id: 16,
    title: 'Illenium',
    action: '#illenium',
  },
  {
    id: 17,
    title: 'Dabi',
    action: '#dabi',
  },
  {
    id: 18,
    title: 'Fórmula 1',
    action: '#f1',
  },
];

function Container() {
  const { menu } = useContext(Context);

  return (
    <div className={`${styles.container} ${menu && styles.containerMenuActive}`}>
      <section className={styles.sliderContainer}>
        <>
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
        </>
      </section>
      <main className={styles.videosContainer}></main>
    </div>
  );
}

export default function MainContent() {
  return (
    <Layout>
      <Container />
    </Layout>
  );
}