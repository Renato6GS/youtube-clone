import MenuItem from '../MenuItem';
import UlListMenu from '../UlListMenu';

import styles from './styles.module.css';

export default function ExplorerYouTubeSection() {
  return (
    <section className={styles.exploreContainer}>
      <p className={styles.explorerTitle}>EXPLORAR</p>
      <UlListMenu>
        <MenuItem url={'/music'}>
          <img className={styles.exploreImage} src='/images/music.jpg' alt='' />
          <p className={styles.exploreLabel}>Música</p>
        </MenuItem>

        <MenuItem url={'/sports'}>
          <img className={styles.exploreImage} src='/images/trophy.jpg' alt='' />
          <p className={styles.exploreLabel}>Deportes</p>
        </MenuItem>

        <MenuItem url={'/videogames'}>
          <img className={styles.exploreImage} src='/images/mando.jpg' alt='' />
          <p className={styles.exploreLabel}>Videojuegos</p>
        </MenuItem>

        <MenuItem url={'/learning'}>
          <img className={styles.exploreImage} src='/images/light.jpg' alt='' />
          <p className={styles.exploreLabel}>Aprendizaje</p>
        </MenuItem>

        <MenuItem url={'/vr'}>
          <img className={styles.exploreImage} src='/images/VR.jpg' alt='' />
          <p className={styles.exploreLabel}>Video parorámico en 360°</p>
        </MenuItem>
      </UlListMenu>
    </section>
  );
}
