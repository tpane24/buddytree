// components/layout.js

import Head from 'next/head';
import Header from '../components/header';
import Container from '@material-ui/core/Container';

const Layout = ({ children }) => (
  <>
  <Container fixed>
    <Head>
      <title>buddytree | upgrade your social life</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>

    <Header />

    <main>{children}</main>

    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        color: #333;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          'Helvetica Neue', Arial, Noto Sans, sans-serif, 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      }
    `}</style>
  </Container>
  </>
);

export default Layout;