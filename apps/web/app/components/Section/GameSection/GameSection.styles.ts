import { createStyles } from '@jfteam/material';

export const useStyles = createStyles(
  (theme, phaserConfig: Phaser.Types.Core.GameConfig) => ({
    container: {
      width: phaserConfig.width,
      height: phaserConfig.height,
      '-webkit-clip-path': 'polygon(0 0, 0 100%, 100% 80%, 100% 0)',
      clipPath: 'polygon(0 0, 0 100%, 100% 70%, 100% 0)'
    }
  })
);
