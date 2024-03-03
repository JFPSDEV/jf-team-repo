// CastleManager.ts

import 'phaser';

import { TCoordinate } from '../types';
import castle from '../assets/castle.png';
import castleDark from '../assets/castleDark.png';
import { Level } from '../level';

export class CastleManager {
  private scene: Level;

  constructor(scene: Level, coordinate: TCoordinate) {
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

  public updateCastle(isLightMode: boolean): void {
    if (isLightMode) {
      this.scene.load.image('castle', castle.src);
    } else {
      this.scene.load.image('castle', castleDark.src);
    }
  }
}
