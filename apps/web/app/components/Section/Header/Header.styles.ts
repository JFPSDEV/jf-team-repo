import { createStyles } from '@jfteam/material';

export const useStyles = createStyles(
  (theme, phaserConfig: Phaser.Types.Core.GameConfig) => ({
    mainContainer: {
      position: 'absolute',
      width: '100%',
      zIndex: 1
    },
    navbar: {
      height: 100
    },
    header: {
      width: phaserConfig.width,
      height: phaserConfig.height,
      '-webkit-clip-path': 'polygon(0 0, 0 100%, 100% 80%, 100% 0)',
      clipPath: 'polygon(0 0, 0 100%, 100% 70%, 100% 0)'
    }
  })
);
