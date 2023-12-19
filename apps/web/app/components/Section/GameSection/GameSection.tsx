import React from "react";

import { Phaser, PhaserContainer } from "@jfteam/phaser_next";

import { gameId, config } from "./config";
import MainScene from "./MainScene";

interface GameSectionProps {}

export const GameSection = (props: GameSectionProps) => {
  const {} = props;

  return (
    <PhaserContainer gameId={gameId} config={config} mainScene={MainScene} />
  );
};
