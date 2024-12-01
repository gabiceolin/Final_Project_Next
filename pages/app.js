//Gabriela Ceolin 200550539

import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap styles
import '../styles/globals.css';  // Import your global styles here
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Portfolio Website</title>
        <meta name="description" content="This is my portfolio website showcasing my projects and contact information." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta property="og:title" content="My Portfolio Website" />
        <meta property="og:description" content="Explore my work and projects on my portfolio site." />
        <meta property="og:image" content="/public/portfolio-image.jpg" />
        <meta property="og:url" content="https://www.myportfolio.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
