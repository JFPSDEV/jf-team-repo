import { Phaser } from '@jfteam/phaser_next';

export const gameId: string = 'phaser-game';

export const config: Phaser.Types.Core.GameConfig = {
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  scale: {
    parent: gameId,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: '100%',
    height: 600
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  }
  // parent: gameId,
};

export const H: number = +(config?.height || 0);
export const W: number = +(config?.width || 0);
