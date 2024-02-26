import React from 'react';
import { CVPage } from '@/components';
import { ELocale, EPageId, EPageProps, ICVPage, PageProps } from '@/utils';
import { getPage } from '@/utils/get-page';

interface LocaleCVPageProps extends PageProps {
  page: ICVPage;
}

export default function LocaleCVPage({ page }: LocaleCVPageProps) {
  return <CVPage page={page} />;
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
  const locale = context?.params?.locale || ELocale.FR;
  const page = await getPage<ICVPage>(EPageId.CV, locale);

  return {
    props: {
      [EPageProps.page]: page,
      [EPageProps.locale]: locale,
      [EPageProps.pageName]: EPageId.HOME,
      preview: false,
    },
    revalidate: 10,
  };
};
