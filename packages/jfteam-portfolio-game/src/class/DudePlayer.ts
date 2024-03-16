import 'phaser';

import { Player } from './Player';

import dude from '../assets/dude.png';
import { EAnimation, EKey, TCoordinate } from '../types';
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
    loadScene.load.spritesheet(EKey.PLAYER_KEY, dude.src, {
      frameWidth: 44,
      frameHeight: 76
    });
  }

  private setupAnimations(): void {
    this.scene.anims.create({
      key: EAnimation.PLAYER_LEFT,
      frames: this.scene.anims.generateFrameNumbers(EKey.PLAYER_KEY, {
        start: 17,
        end: 11
      }),
      frameRate: 20,
      repeat: -1
    });

    this.scene.anims.create({
      key: EAnimation.PLAYER_PASSIVE_RIGHT,
      frames: [{ key: EKey.PLAYER_KEY, frame: 18 }],
      frameRate: 20
    });

    this.scene.anims.create({
      key: EAnimation.PLAYER_PASSIVE_LEFT,
      frames: [{ key: EKey.PLAYER_KEY, frame: 17 }],
      frameRate: 20
    });

    const jumpFrameRate = 15;

    this.scene.anims.create({
      key: EAnimation.PLAYER_JUMP_RIGHT,
      frames: this.scene.anims.generateFrameNumbers(EKey.PLAYER_KEY, {
        start: 25,
        end: 35
      }),
      frameRate: jumpFrameRate
    });

    this.scene.anims.create({
      key: EAnimation.PLAYER_JUMP_LEFT,
      frames: this.scene.anims.generateFrameNumbers(EKey.PLAYER_KEY, {
        start: 10,
        end: 0
      }),
      frameRate: jumpFrameRate
    });

    // this.scene.anims.create({
    //   key: EAnimation.PLAYER_JUMP_RIGHT,
    //   frames: [{ key: EKey.PLAYER_KEY, frame: 32 }]
    // });

    // this.scene.anims.create({
    //   key: EAnimation.PLAYER_JUMP_LEFT,
    //   frames: [{ key: EKey.PLAYER_KEY, frame: 4 }]
    // });

    this.scene.anims.create({
      key: EAnimation.PLAYER_RIGHT,
      frames: this.scene.anims.generateFrameNumbers(EKey.PLAYER_KEY, {
        start: 18,
        end: 24
      }),
      frameRate: 20,
      repeat: -1
    });
  }
}
