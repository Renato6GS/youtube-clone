import MenuItem from '../MenuItem';
import UlListMenu from '../UlListMenu';

import styles from './styles.module.css';

export default function ConfigurationSection() {
  return (
    <section className={styles.exploreContainer}>
      <UlListMenu>
        <MenuItem url={'/music'}>
          <img className={styles.configImage} src='/icons/settings.svg' alt='' />
          <p className={styles.exploreLabel}>Configuración</p>
        </MenuItem>

        <MenuItem url={'/sports'}>
          <img className={styles.configImage} src='/icons/flag-regular.svg' alt='' />
          <p className={styles.exploreLabel}>Deportes</p>
        </MenuItem>

        <MenuItem url={'/videogames'}>
          <img className={styles.configImage} src='/icons/help.svg' alt='' />
          <p className={styles.exploreLabel}>Videojuegos</p>
        </MenuItem>

        <MenuItem url={'/learning'}>
          <img className={styles.configImage} src='/icons/comments.svg' alt='' />
          <p className={styles.exploreLabel}>Aprendizaje</p>
        </MenuItem>
      </UlListMenu>
    </section>
  );
}
