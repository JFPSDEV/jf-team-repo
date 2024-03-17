import React from 'react';

import path from 'path';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { IconChevronDown } from '@jfteam/icons';
import { Group, Stack, Title } from '@jfteam/material';
import { ELocale, ENavlink, EPageId, headerLink } from '@/utils';

import { footerLocale } from './locale';
import classes from './NextPageFooter.module.css';

interface NextPageFooterProps {
  locale: ELocale;
}

const NextPageFooter = (props: NextPageFooterProps) => {
  const { locale } = props;

  const router = useRouter();
  const pageName = path.basename(router.pathname) as EPageId;
  let navPage: ENavlink = ENavlink.CV;

  if (pageName !== EPageId.CV) {
    navPage = ENavlink.HOME;
  }

  const redirectNav = navPage === ENavlink.HOME ? ENavlink.CV : ENavlink.HOME;

  const PageLogo = headerLink.navlink[redirectNav].Icon;

  return (
    <Group justify="center">
      <Link
        href={`/${locale}${headerLink.navlink[redirectNav][locale].link}`}
        className={classes.link}
      >
        <Stack align="center" gap={3}>
          <Title order={3}>{footerLocale[locale].h3}</Title>
          <Title order={2}>{footerLocale[locale][navPage].h2}</Title>
          <IconChevronDown size={30} />
          <PageLogo size={40} />
        </Stack>
      </Link>
    </Group>
  );
};

export default NextPageFooter;
