import { ELocale, EPageId, EPageProps, IHomePage, PageProps } from '@/utils';
import { HomePage } from '../../components';
import { getPage } from '@/utils/get-page';

interface LocaleHomePageProps extends PageProps {
  page: IHomePage;
}

export default function LocaleHomePage(props: LocaleHomePageProps) {
  const { page } = props;

  return <HomePage page={page} />;
}

// /**
//  * STATIC PATHS
//  * -----------
//  */
export const getStaticPaths = async () => {
  const paths = Object.values(ELocale).map((key) => ({
    params: { locale: key, pageName: EPageId.HOME },
  }));

  return {
    paths: paths,
    fallback: true,
  };
};

// /**
//  * STATIC PROPS
//  * -----------
//  */
export const getStaticProps = async (context: {
  params: {
    locale: ELocale;
  };
}) => {
  const locale = context?.params?.locale || ELocale.FR;
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
