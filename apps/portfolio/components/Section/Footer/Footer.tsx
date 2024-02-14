import React from 'react';

import classes from './Footer.module.css';
import { Box, Skeleton } from '@jfteam/material';
import { Section } from '../Section';
import { NavBar } from '../..';
import { FooterGame } from '../../Game/FooterGame';

interface FooterProps {}

export const Footer = (props: FooterProps) => {
  const {} = props;

  return (
    <footer className={classes.footerContainer}>
      <Box className={classes.container} p={0} m={0}>
        <Box className={classes.game} p={0} m={0}>
          <FooterGame />
        </Box>
      </Box>
    </footer>
  );
};
