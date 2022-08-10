import MenuItem from '../MenuItem';
import UlListMenu from '../UlListMenu';

import styles from './styles.module.css';

export default function MoreYouTubeSection() {
  return (
    <section className={styles.moreYoutubeContainer}>
      <p className={styles.explorerTitle}>MÁS DE YOUTUBE</p>
      <UlListMenu>
        <MenuItem url={'/premium'}>
          <img className={styles.moreYoutubeImage} src='/images/youtube-logo.png' alt='' />
          <p className={styles.exploreLabel}>YouTube Premium</p>
        </MenuItem>

        <MenuItem url={'/youtube-music'}>
          <img className={styles.moreYoutubeImage} src='/images/youtube-music.png' alt='' />
          <p className={styles.exploreLabel}>YouTube Music</p>
        </MenuItem>

        <MenuItem url={'/youtube-kids'}>
          <img className={styles.moreYoutubeImage} src='/images/youtube-kids.png' alt='' />
          <p className={styles.exploreLabel}>YouTube Kids</p>
        </MenuItem>

        <MenuItem url={'/youtube-tv'}>
          <img className={styles.moreYoutubeImage} src='/images/youtube-tv.png' alt='' />
          <p className={styles.exploreLabel}>YouTube TV</p>
        </MenuItem>
      </UlListMenu>
    </section>
  );
}
