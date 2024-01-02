import React from 'react';

import { PortfolioGame } from '@jfteam/portfolio_game';
import { Container, Box, Button } from '@mantine/core';

interface GameSectionProps {}

export const GameSection = (props: GameSectionProps) => {
  const {} = props;

  return (
    <PortfolioGame />
    // <Container size="lg" style={{ border: "1px solid black" }}>
    //   <Container>
    //     <PortfolioGame />
    //   </Container>
    // </Container>
  );
};
