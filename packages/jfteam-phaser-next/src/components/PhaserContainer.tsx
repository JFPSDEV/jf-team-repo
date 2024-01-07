import React, { HTMLAttributes, useEffect, useState } from 'react';

import dynamic from 'next/dynamic';

// export interface PhaserContainerProps {
//   gameId: string;
//   config: Phaser.Types.Core.GameConfig;
//   mainScene: Phaser.Types.Scenes.SceneType;
//   className?: HTMLAttributes<HTMLDivElement>['className'];
//   style?: React.CSSProperties;
// }

export interface PhaserContainerProps {
  gameId: any;
  config: any;
  mainScene: any;
  className?: HTMLAttributes<HTMLDivElement>['className'];
  style?: React.CSSProperties;
}

const DynamicComponentWithNoSSRWrapper = dynamic<PhaserContainerProps>(
  () => import('./PhaserRender').then((module) => module.default),
  {
    ssr: false
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
