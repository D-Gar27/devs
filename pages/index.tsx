import type { NextPage } from 'next';
import Head from 'next/head';
import Posts from '../components/Posts';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Burmese Dev</title>
      </Head>
      <main>
        <Posts />
      </main>
    </>
  );
};

export default Home;
