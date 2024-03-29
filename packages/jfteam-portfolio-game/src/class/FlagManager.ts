// FlagManager.ts

import 'phaser';

import { TCoordinate } from '../types';
import flag from '../assets/flag.png';

export class FlagManager {
  private scene: Phaser.Scene;

  constructor(scene: Phaser.Scene, coordinate: TCoordinate) {
    this.scene = scene;
    this.createFlag(coordinate);
  }

  static load(loadScene: Phaser.Scene): void {
    loadScene.load.image('flag', flag.src);
  }

  private createFlag(coordinate: TCoordinate): void {
    const flag = this.scene.add.image(coordinate.x, coordinate.y, 'flag');
    const x = 1.5;
    flag.setScale(
      (flag.width * x) / flag.width,
      (flag.height * x) / flag.height
    );
  }
}
