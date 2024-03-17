import { ELocale, EPageId, EPageProps, IHomePage, PageProps } from '@/utils';
import { HomePage } from '../components';
import { getPage } from '@/utils/get-page';

interface IndexPageProps extends PageProps {
  page: IHomePage;
  locale: ELocale;
}

export default function IndexPage(props: IndexPageProps) {
  const { page, locale } = props;

  return <HomePage locale={locale} page={page} />;
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
