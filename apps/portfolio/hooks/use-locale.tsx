import React from 'react';

import { ELocale } from '@/utils';
import { useRouter } from 'next/router';

export const useLocale = () => {
  const router = useRouter();

  const switchLocale = (newLocale: ELocale) => {
    const { pathname, query } = router;
    router.push({
      pathname,
      query: { ...query, locale: newLocale },
    });
  };

  const linkLocale = router?.query?.locale as ELocale;
  const locale: ELocale = linkLocale || ELocale.FR;

  return { locale, switchLocale };
};
