import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>YouTube | Clone</title>
        <meta name='description' content='The best YouTube Clone made with Next JS' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className={styles.header}>
        <section className={styles.headerLeft}>
          <button className={styles.btn}>
            <img className={styles.hamburgerMenu} src='icons/menu-2.svg' alt='Menú' />
          </button>
          <a className={styles.logo} href='#'>
            <img className={styles.imageLogo} src='images/yt_logo_rgb_dark.png' alt='YouTube' width={96} />
          </a>
        </section>

        <section className={styles.headerCenter}>
          <form className={styles.formSearch}>
            <input className={styles.inputSearch} type='search' placeholder='Buscar' />
            <button className={styles.buttonSearch}>
              <img className={styles.search} src='icons/search.svg' alt='' />
            </button>
          </form>
          <button className={styles.btnMicrophone}>
            <img className={styles.microphone} src='icons/microphone.svg' alt='' />
          </button>
        </section>

        <section className={styles.headerRight}>
          <button className={styles.btnDots}>
            <img className={styles.dotsVertical} src='icons/dots-vertical.svg' alt='' />
          </button>
          <button className={styles.btnLogIn}>
            <img className={styles.userCircle} src='icons/user-circle.svg' alt='' /> ACCEDER
          </button>
        </section>
      </header>
    </div>
  );
};

export default Home;
