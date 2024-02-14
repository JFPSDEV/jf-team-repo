// PowBlockManager.ts

import 'phaser';

import { Game, TCoordinate } from '../types';
import DarkModeBlock from '../assets/DarkModeBlock.png';
import { MainScene } from '../MainScene';
const spriteKey = 'powBlock';
type TCallBacks = (value: boolean) => void;
export class PowBlockManager {
  private scene: MainScene;
  private powBlockGroup: Phaser.Physics.Arcade.Group;
  private callBacks?: TCallBacks[] = [];

  constructor(
    scene: MainScene,
    powBlocs: TCoordinate[],
    callBacks?: TCallBacks[]
  ) {
    this.scene = scene;
    this.callBacks = callBacks;
    this.powBlockGroup = this.scene.physics.add.group({
      allowGravity: false
    });
    this.initLightMode();
    this.initAnims();
    this.createSpBlock(powBlocs);
  }

  static loadSprite(loadScene: Phaser.Scene): void {
    loadScene.load.spritesheet(spriteKey, DarkModeBlock.src, {
      frameWidth: 405,
      frameHeight: 405
    });
  }

  private initLightMode(): void {
    const game = this.scene.game as Game;
    const isLightMode = game.params.colorScheme === 'light';
    this.scene.setIsLightMode(isLightMode);
  }

  private initAnims(): void {
    this.scene.anims.create({
      key: 'powBlockAnims',
      frames: this.scene.anims.generateFrameNumbers(spriteKey, {
        start: 0,
        end: 5
      }),
      frameRate: 4,
      repeat: -1
    });
  }

  public runCallBacks = (value: boolean): void => {
    this.callBacks?.forEach((callback) => {
      callback(value);
    });
  };

  private mousClick(): void {
    const game = this.scene.game as Game;

    if (this.scene.getIsLightMode()) {
      this.callBacks?.forEach((callback) => {
        callback(false);
      });
      this.scene.setIsLightMode(false);
      game.callBacks.dark();
    } else {
      this.callBacks?.forEach((callback) => {
        callback(true);
      });
      this.scene.setIsLightMode(true);
      game.callBacks.light();
    }
  }

  private createSpBlock(spBlocks: TCoordinate[]): void {
    spBlocks.forEach((_spBlock) => {
      this.powBlockGroup.create(_spBlock.x, _spBlock.y, spriteKey);
    });

    const actionClick = this.mousClick;

    this.powBlockGroup.children.iterate(function (child) {
      const powBlock = child as Phaser.Physics.Arcade.Sprite;
      powBlock.setImmovable(true);
      powBlock.anims.play('powBlockAnims');
      powBlock.setInteractive();
      powBlock.on('pointerdown', actionClick);
      powBlock.setScale(40 / powBlock.width, 40 / powBlock.height);
      return null;
    });
  }

  getPowBlockGroup(): Phaser.Physics.Arcade.Group {
    return this.powBlockGroup;
  }
}
