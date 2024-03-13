// DudePlayer.ts

import 'phaser';

import { Player } from './Player';

import dude from '../assets/dude.png';
import { TCoordinate } from '../types';
import { Level } from '../level';

export class DudePlayer extends Player {
  constructor(
    scene: Level,
    x: number,
    y: number,
    jumpCoordinate: TCoordinate[]
  ) {
    super(scene, x, y, jumpCoordinate);
    this.setupAnimations();
  }

  static load(loadScene: Level): void {
    loadScene.load.spritesheet('dude', dude.src, {
      frameWidth: 16,
      frameHeight: 32
    });
  }

  private setupAnimations(): void {
    this.scene.anims.create({
      key: 'left',
      frames: this.scene.anims.generateFrameNumbers('dude', {
        start: 6,
        end: 1
      }),
      frameRate: 20,
      repeat: -1
    });

    this.scene.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 7 }],
      frameRate: 20
    });

    this.scene.anims.create({
      key: 'turnRight',
      frames: [{ key: 'dude', frame: 7 }],
      frameRate: 20
    });

    this.scene.anims.create({
      key: 'turnLeft',
      frames: [{ key: 'dude', frame: 6 }],
      frameRate: 20
    });

    this.scene.anims.create({
      key: 'jumpRight',
      frames: [{ key: 'dude', frame: 13 }],
      frameRate: 20
    });

    this.scene.anims.create({
      key: 'jumpLeft',
      frames: [{ key: 'dude', frame: 0 }],
      frameRate: 20
    });

    this.scene.anims.create({
      key: 'right',
      frames: this.scene.anims.generateFrameNumbers('dude', {
        start: 7,
        end: 12
      }),
      frameRate: 20,
      repeat: -1
    });
  }
}
