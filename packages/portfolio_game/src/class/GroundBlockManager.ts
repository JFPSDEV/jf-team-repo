// GroundBlockManager.ts

import { Phaser } from '@jfteam/phaser_next';

import { H } from '../config';

export class GroundBlockManager {
  private scene: Phaser.Scene;
  private groundBlocks: Phaser.Physics.Arcade.StaticGroup;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.groundBlocks = this.scene.physics.add.staticGroup();
  }

  createGroundBlocks(): void {
    this.createGroundBlockLayer('groundBlock1', 34);
    this.createGroundBlockLayer('groundBlock2', 10);
  }

  private createGroundBlockLayer(key: string, height: number): void {
    const groundBlockSize = 25;

    const groundBlocks = this.scene.physics.add.staticGroup({
      key: key,
      repeat: 100,
      setXY: { x: 0, y: H - height, stepX: groundBlockSize }
    });

    groundBlocks.children.iterate(function (block: any) {
      block.setScale(groundBlockSize / block.width);
    });

    this.groundBlocks.addMultiple(groundBlocks.getChildren());
  }

  getGroundBlocks(): Phaser.Physics.Arcade.StaticGroup {
    return this.groundBlocks;
  }
}
