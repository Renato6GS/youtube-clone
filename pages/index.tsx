import type { NextPage } from 'next';
import Head from 'next/head';

import MainContent from 'components/MainContent';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>YouTube | Clone</title>
        <meta name='description' content='The best YouTube Clone made with Next JS' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <MainContent />
    </>
  );
};

export default Home;
