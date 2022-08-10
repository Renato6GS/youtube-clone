import { useContext } from 'react';
import Context from '../../../context/MenuContext';
import styles from './styles.module.css';

export default function HeaderLeft() {
  const { handlerMenu } = useContext(Context);

  return (
    <section className={styles.headerLeft}>
      <button className={styles.btn} onClick={handlerMenu}>
        <img className={styles.hamburgerMenu} src='icons/menu-2.svg' alt='Menú' />
      </button>
      <a className={styles.logo} href='#'>
        <img className={styles.imageLogo} src='images/yt_logo_rgb_dark.png' alt='YouTube' width={96} />
      </a>
    </section>
  );
}
