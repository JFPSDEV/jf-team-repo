import React from 'react';

import { PortfolioGame, config } from '@jfteam/portfolio_game';

import { useStyles } from './GameSection.styles';
import { Box } from '@jfteam/material';

interface GameSectionProps {}

export const GameSection = (props: GameSectionProps) => {
  const {} = props;

  const { classes } = useStyles(config);

  return (
    <Box
      sx={
        {
          //border: '4px solid'
        }
      }
    >
      <Box className={classes.container}>
        <PortfolioGame />
      </Box>
    </Box>
    // <Container size="lg" style={{ border: "1px solid black" }}>
    //   <Container>
    //     <PortfolioGame />
    //   </Container>
    // </Container>
  );
};
