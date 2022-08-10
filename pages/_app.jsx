import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import MyApp from './MyApp';
import { AuthContextProvider } from '../store/auth-context';
import * as gtag from '../lib/gtag';

import '../components/all.scss';
import '../styles/globals.scss';

function Volonteria(props) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <AuthContextProvider>
        <MyApp {...props} />
      </AuthContextProvider>
    </>
  );
}

export default Volonteria;
