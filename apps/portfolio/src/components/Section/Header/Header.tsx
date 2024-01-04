import React from 'react';

import { Box } from '@jfteam/material';

import { useStyles } from './Header.styles';
import { NavBar } from '../..';
import { Section } from '../Section';
import { Game } from '../../Game/Game';

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  const {} = props;

  const { classes } = useStyles({ width: '100%', height: 550 });

  return (
    <>
      <Box className={classes.mainContainer}>
        <Section>
          <NavBar className={classes.navbar} />
        </Section>
      </Box>

      <Box className={classes.header}>
        <Game />
      </Box>
    </>
  );
};
