import 'phaser';

import sky from '../assets/sky.png';
import skySprite from '../assets/skySprite.png';
import { Level } from '../level';
import { ETheme } from '@jfteam/types';

const spriteKey = 'skyItem';

export class SkyManager {
  private scene: Level;
  private skySprite!: Phaser.GameObjects.TileSprite;
  private frameIndex: number = 0;
  private frameRate: number = 4;

  constructor(scene: Level) {
    this.scene = scene;
    this.createSky();
    this.initAnims();
  }

  static load(loadScene: Level): void {
    loadScene.load.image('sky', sky.src);
    loadScene.load.spritesheet(spriteKey, skySprite.src, {
      frameWidth: 1067.7,
      frameHeight: 450
    });
  }

  private initAnims(): void {
    this.scene.time.addEvent({
      delay: 800 / this.frameRate,
      callback: this.updateFrameIndex,
      callbackScope: this,
      loop: true
    });
  }

  private createSky(): void {
    this.skySprite = this.scene.add.tileSprite(
      0,
      0,
      this.scene.cameras.main.width,
      this.scene.cameras.main.height,
      spriteKey
    );
    this.skySprite.setOrigin(0, 0);
    this.skySprite.setFrame(
      this.scene.getTheme() === ETheme.LIGHT ? 0 : 1
    );
  }

  private updateFrameIndex(): void {
    if (this.scene.getTheme() === ETheme.LIGHT) {
      this.frameIndex = 0;
    } else {
      this.frameIndex = ((this.frameIndex + 1) % 8) + 1;
    }

    this.skySprite.setFrame(this.frameIndex);
  }
}
