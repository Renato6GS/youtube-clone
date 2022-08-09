import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>YouTube | Clone</title>
        <meta name='description' content='The best YouTube Clone made with Next JS' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
    </div>
  );
};

export default Home;
