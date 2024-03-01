import React, { useState } from 'react';

import { Box, Skeleton, useMantineColorScheme, useMantineTheme } from '@jfteam/material';

import { NavBar } from '../..';
import { Section } from '../Section';
import classes from './Hero.module.css';
import { HeaderGame } from '../../Game/HeaderGame';
import { ELocale, EVartiant, type TSectionProps } from '@/utils';
import { HeroRadiusContainer } from './HeroRadiusContainer/HeroRadiusContainer';

interface HeroProps extends TSectionProps {}

export const Hero = ({ isMobile }: HeroProps) => {
  const { colorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });

  const theme = useMantineTheme();

  return (
    <header>
      {isMobile ? (
        <Section py={0} variant={EVartiant.TERTIARY}>
          <NavBar />
        </Section>
      ) : (
        <Box className={classes.mainContainer}>
          <HeroRadiusContainer
            className={classes.radiusBorderContainer}
            color="#d18852"
            height={155}
          />
          <HeroRadiusContainer
            color={colorScheme === 'light' ? theme.white : theme.colors.dark[7]}
            className={classes.radiusContainer}
          />

          <Box className={classes.navBarContainer}>
            <Section py={0} bg="none">
              <NavBar />
            </Section>
          </Box>

          <Box className={classes.header}>
            <HeaderGame />
          </Box>

          <Box className={classes.sectionBackgroundContainer}>
            <Skeleton className={classes.skeletonBackground} visible={true} />
          </Box>
        </Box>
      )}
    </header>
  );
};
