import MenuItem from '../MenuItem';
import UlListMenu from '../UlListMenu';

import styles from './styles.module.css';

export default function ExplorerChannelsSection() {
  return (
    <section>
      <UlListMenu>
        <MenuItem url={'/more-youtube'}>
          <img className={styles.circlePlus} src='/icons/circle-plus.svg' alt='' />
          <p className={styles.exploreLabel}>Explorar canales</p>
        </MenuItem>
      </UlListMenu>
    </section>
  );
}
