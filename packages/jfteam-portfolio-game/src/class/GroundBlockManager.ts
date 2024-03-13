// GroundBlockManager.ts

import 'phaser';

import groundBlock1 from '../assets/groundBlock1-bis.png';
import groundBlock2 from '../assets/groundBlock2-bis.png';

import { Level } from '../level';

const sizeEl = 25;

export class GroundBlockManager {
  private scene: Level;
  private groundBlocks: Phaser.Physics.Arcade.StaticGroup;
  static groundSize = sizeEl * 7;

  constructor(scene: Level) {
    this.scene = scene;
    this.groundBlocks = this.scene.physics.add.staticGroup();
  }

  static load(loadScene: Level): void {
    loadScene.load.image('groundBlock1', groundBlock1.src);
    loadScene.load.image('groundBlock2', groundBlock2.src);
  }

  createGroundBlocks(): void {
    for (let i = 0; i < 6; i++) {
      this.createGroundBlockLayer('groundBlock2', 0, i * sizeEl + 1);
    }

    this.createGroundBlockLayer('groundBlock1', 0, 148);
  }

  private createGroundBlockLayer(
    key: string,
    width: number,
    height: number
  ): void {
    var H = this.scene.cameras.main.height;

    const groundBlocks = this.scene.physics.add.staticGroup({
      key: key,
      repeat: 100,
      setXY: { x: width, y: H - height, stepX: sizeEl }
    });

    groundBlocks.children.iterate(function (block: any) {
      block.setScale(sizeEl / block.width);
      return null;
    });

    this.groundBlocks.addMultiple(groundBlocks.getChildren());
  }

  getGroundBlocks(): Phaser.Physics.Arcade.StaticGroup {
    return this.groundBlocks;
  }
}
