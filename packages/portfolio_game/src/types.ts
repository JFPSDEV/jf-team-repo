import 'phaser';

export interface PhaserGameType {
  PLAYER: Phaser.Physics.Arcade.Sprite;
  CURSORS: Phaser.Types.Input.Keyboard.CursorKeys;
}

export interface TCoordinate {
  x: number;
  y: number;
}
