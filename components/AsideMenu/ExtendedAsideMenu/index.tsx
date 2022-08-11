import ConfigurationSection from '../ConfigurationSection';
import ExplorerChannelsSection from '../ExplorerChannelsSection';
import ExplorerYouTubeSection from '../ExplorerYouTubeSection';
import FooterSection from '../FooterSection';
import LogInSection from '../LogInSection';
import MoreYouTubeSection from '../MoreYouTubeSection';
import styles from './styles.module.css';

export default function ExtendedAsideMenu() {
  return (
    <>
      <span className={styles.separator}></span>
      <LogInSection />
      <span className={styles.separator}></span>
      <ExplorerYouTubeSection />

      {/* Explorar canales */}
      <span className={styles.separator}></span>
      <ExplorerChannelsSection />

      {/* Más de youtube */}
      <span className={styles.separator}></span>
      <MoreYouTubeSection />

      {/* Configuraciones */}
      <span className={styles.separator}></span>
      <ConfigurationSection />

      {/* Footer info */}
      <span className={styles.separator}></span>
      <FooterSection />
    </>
  );
}
