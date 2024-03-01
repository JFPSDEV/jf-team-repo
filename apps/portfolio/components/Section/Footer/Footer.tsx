import React from 'react';

import { Box } from '@jfteam/material';

import { TSectionProps } from '@/utils';
import classes from './Footer.module.css';
import { FooterGame } from '../../Game/FooterGame';

interface FooterProps extends TSectionProps {}

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
