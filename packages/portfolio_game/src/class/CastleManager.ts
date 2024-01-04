// CastleManager.ts

import 'phaser';

import { TCoordinate } from '../types';
import castle from '../assets/castle.png';

export class CastleManager {
  private scene: Phaser.Scene;

  constructor(scene: Phaser.Scene, coordinate: TCoordinate) {
    this.scene = scene;
    this.createCastle(coordinate);
  }

  static loadSprite(loadScene: Phaser.Scene): void {
    loadScene.load.image('castle', castle.src);
  }

  private createCastle(coordinate: TCoordinate): void {
    const castle = this.scene.add.image(
      coordinate.x,
      coordinate.y,
      'castle'
    );
    castle.setScale(170 / castle.width, 170 / castle.height);
  }
}
