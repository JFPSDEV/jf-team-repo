// StarManager.ts

import { Phaser } from '@jfteam/phaser_next';

export class StarManager {
  private scene: Phaser.Scene;
  private stars: Phaser.Physics.Arcade.Group;
  private groundBlocks: Phaser.Physics.Arcade.StaticGroup;

  constructor(
    scene: Phaser.Scene,
    groundBlocks: Phaser.Physics.Arcade.StaticGroup
  ) {
    this.scene = scene;
    this.groundBlocks = groundBlocks;
    this.stars = this.scene.physics.add.group();
    this.createStars();
    this.setupColliders();
  }

  private createStars(): void {
    this.stars.createMultiple({
      key: 'star',
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 }
    });

    this.stars.children.iterate(function (child) {
      (child as Phaser.Physics.Arcade.Sprite).setBounceY(
        Phaser.Math.FloatBetween(0.4, 0.8)
      );
      return null;
    });
  }

  private setupColliders(): void {
    this.scene.physics.add.collider(this.stars, this.groundBlocks);
  }

  public handleOverlap(
    player: Phaser.Types.Physics.Arcade.ArcadeColliderType,
    collideCallback?: Phaser.Types.Physics.Arcade.ArcadePhysicsCallback,
    processCallback?: Phaser.Types.Physics.Arcade.ArcadePhysicsCallback,
    callbackContext?: any
  ): Phaser.Physics.Arcade.Collider {
    return this.scene.physics.add.overlap(
      player,
      this.stars,
      collideCallback,
      processCallback,
      callbackContext
    );
  }

  public update(): void {
    // update logic
  }
}
