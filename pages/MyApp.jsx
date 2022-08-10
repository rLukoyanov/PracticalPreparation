import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';

import Navigation from '../components/Navigation/Navigation';
import AuthContext from '../store/auth-context';
import LoginPage from './login';
import Rules from './Rules';

import styles from '../styles/Main.module.scss';
import Header from '../components/Header/Header';

function MyApp({ Component, pageProps }) {
  const authCtx = useContext(AuthContext);
  const router = useRouter();

  if (router.pathname === '/Rules') {
    return <Rules />;
  }

  if (!authCtx.isLoggedIn) {
    return <LoginPage />;
  }

  return (
    <div className={styles.mainPage}>
      <Header />
      <div className={styles.navAndContent}>
        <Navigation />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
