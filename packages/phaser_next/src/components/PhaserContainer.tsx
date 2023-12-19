import React, { useEffect, useState } from "react";

import dynamic from "next/dynamic";

export interface PhaserContainerProps {
  gameId: string;
  config: Phaser.Types.Core.GameConfig;
  mainScene: Phaser.Types.Scenes.SceneType;
}

const DynamicComponentWithNoSSRWrapper = dynamic<PhaserContainerProps>(
  () => import("./PhaserTools/PhaserRender").then((module) => module.default),
  {
    ssr: false,
  }
);

export const PhaserContainer = (props: PhaserContainerProps) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <>{loading ? <DynamicComponentWithNoSSRWrapper {...props} /> : null}</>
  );
};
