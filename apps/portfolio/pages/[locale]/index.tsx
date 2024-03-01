import React from 'react';

import { getPage } from '@/utils/get-page';
import { ELocale, EPageId, EPageProps, IHomePage, PageProps, pageFound } from '@/utils';

import { HomePage } from '../../components';

interface LocaleHomePageProps extends PageProps {
  page: IHomePage;
}

export default function LocaleHomePage({ page }: LocaleHomePageProps) {
  return <HomePage page={page} />;
}

/**
 * STATIC PATHS
 * -----------
 */
export const getStaticPaths = async () => {
  const paths = Object.values(ELocale).map((key) => ({
    params: { locale: key, pageName: EPageId.HOME },
  }));

  return {
    paths: paths,
    fallback: true,
  };
};

/**
 * STATIC PROPS
 * -----------
 */
export const getStaticProps = async (context: {
  params: {
    locale: ELocale;
  };
}) => {
  if (!pageFound(context?.params?.locale)) {
    return {
      notFound: true,
    };
  }

  const locale: ELocale = context?.params?.locale;

  const page = await getPage<IHomePage>(EPageId.HOME, locale);

  return {
    props: {
      [EPageProps.page]: page,
      [EPageProps.locale]: locale,
      [EPageProps.pageName]: EPageId.HOME,
      preview: false,
    },
    revalidate: 30,
  };
};
