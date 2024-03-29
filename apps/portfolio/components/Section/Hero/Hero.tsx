import React from 'react';

import { Box, Skeleton, cx } from '@jfteam/material';

import { NavBar } from '../..';
import { Game } from '@/components';
import { Section } from '../Section';
import classes from './Hero.module.css';
import { ELocale, EPageId, type TSectionProps } from '@/utils';
import { HeroRadiusContainer } from './HeroRadiusContainer/HeroRadiusContainer';

interface HeroProps extends TSectionProps {
  mode: EPageId;
  locale: ELocale;
}

export const Hero = ({ mode, locale }: HeroProps) => {
  return (
    <header>
      <Box className={classes.mainContainer}>
        <HeroRadiusContainer className={classes.radiusBorderContainer} height={155} />
        <HeroRadiusContainer className={cx(classes.radiusContainer, classes.fill)} />

        <Box className={classes.navBarContainer}>
          <Section py={0} bg="none">
            <NavBar locale={locale} />
          </Section>
        </Box>

        <Box className={classes.header}>
          <Game mode={mode} />
        </Box>

        <Box className={classes.sectionBackgroundContainer}>
          <Skeleton className={classes.skeletonBackground} visible={true} />
        </Box>
      </Box>
    </header>
  );
};
