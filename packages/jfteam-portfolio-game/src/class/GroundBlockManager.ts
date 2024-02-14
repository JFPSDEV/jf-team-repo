// GroundBlockManager.ts

import 'phaser';

export class GroundBlockManager {
  private scene: Phaser.Scene;
  private groundBlocks: Phaser.Physics.Arcade.StaticGroup;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.groundBlocks = this.scene.physics.add.staticGroup();
  }

  createGroundBlocks(): void {
    const W = this.scene.cameras.main.width;

    // Step 1
    this.createGroundBlockLayer('groundBlock2', 0, 10);
    this.createGroundBlockLayer('groundBlock2', 0, 34);
    this.createGroundBlockLayer('groundBlock2', 0, 58);
    this.createGroundBlockLayer('groundBlock2', 0, 80);

    // Step 2
    this.createGroundBlockLayer('groundBlock2', 0, 102);

    // Step 2
    this.createGroundBlockLayer('groundBlock2', 0, 124);

    // Step 3
    this.createGroundBlockLayer('groundBlock1', 0, 148);
  }

  private createGroundBlockLayer(
    key: string,
    width: number,
    height: number
  ): void {
    var H = this.scene.cameras.main.height;

    const groundBlockSize = 25;

    const groundBlocks = this.scene.physics.add.staticGroup({
      key: key,
      repeat: 100,
      setXY: { x: width, y: H - height, stepX: groundBlockSize }
    });

    groundBlocks.children.iterate(function (block: any) {
      block.setScale(groundBlockSize / block.width);
      return null;
    });

    this.groundBlocks.addMultiple(groundBlocks.getChildren());
  }

  getGroundBlocks(): Phaser.Physics.Arcade.StaticGroup {
    return this.groundBlocks;
  }
}
