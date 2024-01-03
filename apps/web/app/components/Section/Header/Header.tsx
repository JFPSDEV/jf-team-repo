import React from 'react';

import { PortfolioGame, config } from '@jfteam/portfolio_game';

import { useStyles } from './Header.styles';
import { Box } from '@jfteam/material';
import { NavBar } from '../..';
import { Section } from '../Section';

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  const {} = props;

  const { classes } = useStyles(config);

  return (
    <>
      <Box className={classes.mainContainer}>
        <Section>
          <NavBar className={classes.navbar} />
        </Section>
      </Box>

      <Box className={classes.header}>
        <PortfolioGame />
      </Box>
    </>
  );
};

// <Container size="lg" style={{ border: "1px solid black" }}>
//   <Container>
//     <PortfolioGame />
//   </Container>
// </Container>
