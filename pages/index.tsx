import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Layout from 'components/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>YouTube | Clone</title>
        <meta name='description' content='The best YouTube Clone made with Next JS' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <div className={styles.slider}>
          <h1>hola</h1>
        </div>
      </Layout>
    </>
  );
};

export default Home;
