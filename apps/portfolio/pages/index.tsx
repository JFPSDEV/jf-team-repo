import React from 'react';

import { getPage } from '@/utils/get-page';
import { ELocale, EPageId, EPageProps, IHomePage, PageProps } from '@/utils';

import { HomePage } from '../components';

interface IndexPageProps extends PageProps {
  page: IHomePage;
}

export default function IndexPage({ page, locale }: IndexPageProps) {
  return <HomePage page={page} />;
}

/**
 * STATIC PROPS
 * -----------
 */
export const getStaticProps = async () => {
  const page = await getPage<IHomePage>(EPageId.HOME, ELocale.FR);

  return {
    props: {
      [EPageProps.page]: page,
      [EPageProps.locale]: ELocale.FR,
      [EPageProps.pageName]: EPageId.HOME,
      preview: false,
    },
    revalidate: 10,
  };
};
