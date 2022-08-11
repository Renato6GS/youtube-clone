import { useContext } from 'react';
import Layout from 'components/Layout';

import styles from './styles.module.css';
import Context from 'context/MenuContext';
import SliderContent from './SliderContent';
import VideosGallery from './VideosGallery';

function Container() {
  const { menu } = useContext(Context);

  return (
    <div className={`${styles.container} ${menu && styles.containerMenuActive}`}>
      <SliderContent />
      <main className={styles.videosContainer}>
        <VideosGallery />
      </main>
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
