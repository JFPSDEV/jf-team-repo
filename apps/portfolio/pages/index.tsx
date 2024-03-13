import React from 'react';

import { ELocale } from '@/utils';

export default function IndexPage() {
  return null;
}

/**
 * STATIC PROPS
 * -----------
 */
export const getStaticProps = async () => {
  if (process.env.npm_lifecycle_event === 'build')
    return {
      notFound: true,
    };
  return {
    redirect: {
      destination: '/' + ELocale.FR,
      permanent: true,
    },
  };
};
