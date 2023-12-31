import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => (
  <>
    <Head>
      <title>Debateland</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/icon.png" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </Head>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  </>
);

export default MyApp;
