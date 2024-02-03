import 'phaser';

import type { TCallBacks, TGameParams } from '@jfteam/types';

export interface PhaserGameType {
  PLAYER: Phaser.Physics.Arcade.Sprite;
  CURSORS: Phaser.Types.Input.Keyboard.CursorKeys;
}

export interface Game extends Phaser.Game {
  callBacks: TCallBacks;
  params: TGameParams;
}

export interface TCoordinate {
  x: number;
  y: number;
}
