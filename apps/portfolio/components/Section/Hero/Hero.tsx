import React from 'react';

import { Box, Skeleton, cx } from '@jfteam/material';

import { NavBar } from '../..';
import { Section } from '../Section';
import classes from './Hero.module.css';
import { EPageId, EVartiant, type TSectionProps } from '@/utils';
import { HeroRadiusContainer } from './HeroRadiusContainer/HeroRadiusContainer';
import { Game } from '@/components';

interface HeroProps extends TSectionProps {
  mode: EPageId;
}

export const Hero = ({ isMobile, mode }: HeroProps) => {
  return (
    <header className={classes.navMobile}>
      {isMobile ? (
        <Section variant={EVartiant.TERTIARY} py={0}>
          <NavBar />
        </Section>
      ) : (
        <Box className={classes.mainContainer}>
          <HeroRadiusContainer className={classes.radiusBorderContainer} height={155} />
          <HeroRadiusContainer className={cx(classes.radiusContainer, classes.fill)} />

          <Box className={classes.navBarContainer}>
            <Section py={0} bg="none">
              <NavBar />
            </Section>
          </Box>

          <Box className={classes.header}>
            <Game mode={mode} />
          </Box>

          <Box className={classes.sectionBackgroundContainer}>
            <Skeleton className={classes.skeletonBackground} visible={true} />
          </Box>
        </Box>
      )}
    </header>
  );
};
