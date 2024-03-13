import 'phaser';

import { EAnimation, TSpBlocks } from '../types';

import spBlock from '../assets/box-surprise.png';
import { Level } from '../level';
import { spBlockSize } from '../utils';

const spriteKey = 'spBlock';
const ElScale = spBlockSize;

export class SPBlockManager {
  public scene: Level;
  private spBlockGroup: Phaser.Physics.Arcade.Group;

  constructor(scene: Level, spBlocks: TSpBlocks[]) {
    this.scene = scene;
    this.spBlockGroup = this.scene.physics.add.group({
      allowGravity: false
    });
    this.initAnims();
    this.createSpBlock(spBlocks);
  }

  static load(loadScene: Level): void {
    loadScene.load.spritesheet(spriteKey, spBlock.src, {
      frameWidth: 672,
      frameHeight: 674
    });
  }

  private initAnims(): void {
    this.scene.anims.create({
      key: EAnimation.BLOCK_FULL,
      frames: this.scene.anims.generateFrameNumbers(spriteKey, {
        start: 0,
        end: 16
      }),
      frameRate: 15,
      repeat: -1
    });

    this.scene.anims.create({
      key: EAnimation.EMPTY_BLOCK,
      frames: this.scene.anims.generateFrameNumbers(spriteKey, {
        start: 17,
        end: 17
      }),
      frameRate: 1,
      repeat: -1
    });
  }

  private createSpBlock(spBlocks: TSpBlocks[]): void {
    spBlocks.forEach((_spBlock) => {
      this.spBlockGroup.create(_spBlock.x, _spBlock.y, spriteKey);
    });

    this.spBlockGroup.children.iterate((child) => {
      const spBlock = child as Phaser.Physics.Arcade.Sprite;
      spBlock.setImmovable(true);
      spBlock.anims.play(EAnimation.BLOCK_FULL);
      spBlock.setInteractive();
      spBlock.setScale(ElScale / spBlock.width, ElScale / spBlock.height);
      return null;
    });
  }

  getSpBlockGroup(): Phaser.Physics.Arcade.Group {
    return this.spBlockGroup;
  }
}
