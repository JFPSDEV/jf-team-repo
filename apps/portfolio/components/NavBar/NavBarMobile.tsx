import React from 'react';
import { Section } from '../Section/Section';
import { NavBar } from './NavBar';
import { ELocale, EVartiant } from '@/utils';

import classes from './NavBarMobile.module.css';

interface NavBarMobileProps {
  locale: ELocale;
}

export const NavBarMobile = ({ locale }: NavBarMobileProps) => {
  return (
    <header className={classes.navMobile}>
      <Section variant={EVartiant.TERTIARY} py={0}>
        <NavBar locale={locale} />
      </Section>
    </header>
  );
};
