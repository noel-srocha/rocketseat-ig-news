import type { AppProps } from 'next/app';
import '../styles/global.scss';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      { // eslint-disable-next-line react/jsx-props-no-spreading
        <Component {...pageProps} />
      }
    </>
  );
}

export default MyApp;
