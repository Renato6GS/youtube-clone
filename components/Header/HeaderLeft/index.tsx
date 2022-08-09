import styles from './styles.module.css';

export default function HeaderLeft() {
  return (
    <section className={styles.headerLeft}>
      <button className={styles.btn}>
        <img className={styles.hamburgerMenu} src='icons/menu-2.svg' alt='Menú' />
      </button>
      <a className={styles.logo} href='#'>
        <img className={styles.imageLogo} src='images/yt_logo_rgb_dark.png' alt='YouTube' width={96} />
      </a>
    </section>
  );
}
