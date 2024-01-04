// SPBlockManager.ts

import 'phaser';

import { TCoordinate } from '../types';
import surprise_block from '../assets/surprise_block.png';
import spBlock from '../assets/spBlock.png';

const spriteKey = 'spBlock';

export class SPBlockManager {
  private scene: Phaser.Scene;
  private spBlockGroup: Phaser.Physics.Arcade.Group;

  constructor(scene: Phaser.Scene, spBlocks: TCoordinate[]) {
    this.scene = scene;
    this.spBlockGroup = this.scene.physics.add.group({
      allowGravity: false
    });
    this.initAnims();
    this.createSpBlock(spBlocks);
  }

  static loadSprite(loadScene: Phaser.Scene): void {
    loadScene.load.spritesheet(spriteKey, spBlock.src, {
      frameWidth: 16,
      frameHeight: 16
    });
  }

  private initAnims(): void {
    this.scene.anims.create({
      key: 'spBlockAnims',
      frames: this.scene.anims.generateFrameNumbers(spriteKey, {
        start: 0,
        end: 5
      }),
      frameRate: 4,
      repeat: -1
    });

    this.scene.anims.create({
      key: 'spBlockEmptyAnims',
      frames: this.scene.anims.generateFrameNumbers(spriteKey, {
        start: 6,
        end: 6
      }),
      frameRate: 4,
      repeat: -1
    });
  }

  private createSpBlock(spBlocks: TCoordinate[]): void {
    spBlocks.forEach((_spBlock) => {
      this.spBlockGroup.create(_spBlock.x, _spBlock.y, spriteKey);
    });

    this.spBlockGroup.children.iterate(function (child) {
      const spBlock = child as Phaser.Physics.Arcade.Sprite;
      spBlock.setImmovable(true);
      spBlock.anims.play('spBlockAnims');
      spBlock.setInteractive();
      spBlock.setScale(25 / spBlock.width, 25 / spBlock.height);
      return null;
    });
  }

  handleSpBlockCollision(
    player: Phaser.Physics.Arcade.Sprite,
    _spBlock: Phaser.Physics.Arcade.Sprite
  ): void {
    _spBlock.anims.play('spBlockEmptyAnims');
  }

  getSpBlockGroup(): Phaser.Physics.Arcade.Group {
    return this.spBlockGroup;
  }
}
