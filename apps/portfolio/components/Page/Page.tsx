import { EPageId, TSectionProps } from '@/utils';
import React, { ReactNode } from 'react';
import { NavBarMobile } from '../NavBar/NavBarMobile';
import { ELocale } from '@jfteam/types';

import classes from './Page.module.css';
import { Box } from '@jfteam/material';
import { Hero } from '..';

interface PageProps extends TSectionProps {
  page: EPageId;
  locale: ELocale;
  children: ReactNode;
}

export const Page = ({ page, locale, children, ...props }: PageProps) => {
  return (
    <>
      {props.isMobile && <NavBarMobile locale={locale} />}

      <Box className={classes.page}>
        {!props.isMobile && <Hero {...props} locale={locale} mode={page} />}

        {children}
      </Box>
    </>
  );
};
