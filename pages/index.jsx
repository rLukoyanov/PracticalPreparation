import React from 'react';

import Rating from '../components/Main/Rating';

export default function Home({ host = '' }) {
  return <Rating host={host} />;
}

export const getServerSideProps = async (context) => {
  const { req } = context;

  return {
    props: { host: req.headers.host },
  };
};
