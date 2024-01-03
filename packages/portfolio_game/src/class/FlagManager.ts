// FlagManager.ts

import { Phaser } from '@jfteam/phaser_next';

import { TCoordinate } from '../types';
import flag from '../assets/flag.png';

export class FlagManager {
  private scene: Phaser.Scene;

  constructor(scene: Phaser.Scene, coordinate: TCoordinate) {
    this.scene = scene;
    this.createFlag(coordinate);
  }

  static loadSprite(loadScene: Phaser.Scene): void {
    loadScene.load.image('flag', flag.src);
  }

  private createFlag(coordinate: TCoordinate): void {
    const flag = this.scene.add.image(coordinate.x, coordinate.y, 'flag');
    flag.setScale(36 / flag.width, 255 / flag.height);
  }
}
