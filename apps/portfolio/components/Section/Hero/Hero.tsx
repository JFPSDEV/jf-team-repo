import React from 'react';

import { Box, Skeleton } from '@jfteam/material';

import { NavBar } from '../..';
import { Section } from '../Section';
import { Game } from '../../Game/Game';

import classes from './Hero.module.css';

interface HeroProps {}

export const Hero = (props: HeroProps) => {
  const {} = props;

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.sectionBackgroundContainer}>
        <Section className={classes.sectionBackground} isDashed={true} />
      </Box>

      <Box className={classes.sectionBackgroundContainer}>
        <Skeleton className={classes.skeletonBackground} visible={true} />
      </Box>

      <Box className={classes.navBarContainer}>
        <Section isDashed={false}>
          <NavBar className={classes.navbar} />
        </Section>
      </Box>

      <Box className={classes.header}>
        <Game />
      </Box>
    </Box>
  );
};
