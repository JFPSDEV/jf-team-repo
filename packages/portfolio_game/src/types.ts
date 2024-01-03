import { Phaser } from '@jfteam/phaser_next';

export interface PhaserGameType {
  PLAYER: Phaser.Physics.Arcade.Sprite;
  CURSORS: Phaser.Types.Input.Keyboard.CursorKeys;
}

export interface TCoordinate {
  x: number;
  y: number;
}
