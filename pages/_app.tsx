import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  return (
    <>
      <Navbar />
      <div className={pathname !== '/posts/make' ? 'container' : ''}>
        <Component {...pageProps} />
        {pathname !== '/posts/make' && <Sidebar />}
      </div>
    </>
  );
}

export default MyApp;
