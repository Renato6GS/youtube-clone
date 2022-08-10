import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Header from '../components/Header';
import { HandlerMenuContext } from '../context/MenuContext';
import AsideMenu from '../components/AsideMenu';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>YouTube | Clone</title>
        <meta name='description' content='The best YouTube Clone made with Next JS' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <HandlerMenuContext>
        <Header />
        <AsideMenu />
      </HandlerMenuContext>
    </div>
  );
};

export default Home;
