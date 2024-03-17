import React from 'react';
import dynamic from 'next/dynamic';

import { getPage } from '@/utils/get-page';
import { Skeleton } from '@jfteam/material';
import { ELocale, EPageId, EPageProps, ICVPage, PageProps, pageFound } from '@/utils';

const DynamicCVPage = dynamic(() => import('../../components/Page/CVPage/CVPage'), {
  loading: () => <Skeleton visible={true} />,
});

interface LocaleCVPageProps extends PageProps {
  page: ICVPage;
}

export default function LocaleCVPage({ page, locale }: LocaleCVPageProps) {
  return <DynamicCVPage page={page} locale={locale} />;
}

/**
 * STATIC PATHS
 * -----------
 */
export const getStaticPaths = async () => {
  const paths = Object.values(ELocale).map((key) => ({
    params: { locale: key, pageName: EPageId.CV },
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

  const page = await getPage<ICVPage>(EPageId.CV, locale);

  return {
    props: {
      [EPageProps.page]: page,
      [EPageProps.locale]: locale,
      [EPageProps.pageName]: EPageId.CV,
      preview: false,
    },
    revalidate: 10,
  };
};
