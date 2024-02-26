import React from 'react';

import { Box, Skeleton, useMantineColorScheme, useMantineTheme } from '@jfteam/material';

import { NavBar } from '../..';
import { Section } from '../Section';
import { HeaderGame } from '../../Game/HeaderGame';
import { HeroRadiusContainer } from './HeroRadiusContainer/HeroRadiusContainer';

import classes from './Hero.module.css';

interface HeroProps {}

export const Hero = (props: HeroProps) => {
  const {} = props;

  const { colorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });

  const theme = useMantineTheme();

  return (
    <header>
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
          <Section bg="none">
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
    </header>
  );
};
