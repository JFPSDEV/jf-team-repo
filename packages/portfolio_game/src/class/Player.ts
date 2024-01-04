// Player.ts

import { Phaser } from '@jfteam/phaser_next';

import { Direction } from '../enum/direction';

export class Player extends Phaser.Physics.Arcade.Sprite {
  private direction: Direction;
  private isJump: boolean;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'dude');
    this.setScale(25 / this.width, 50 / this.height);

    this.direction = Direction.RIGHT;
    this.isJump = false;

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setBounce(0.2);
    this.setCollideWorldBounds(true);

    const playerBody = this.body as Phaser.Physics.Arcade.Body;
    playerBody.setGravityY(600);
  }

  update(cursors: Phaser.Types.Input.Keyboard.CursorKeys): void {
    if (this.body) {
      this.isJump = !this.body.touching.down;
    }

    // MOVE LEFT
    if (cursors.left?.isDown) {
      this.direction = Direction.LEFT;
      this.setVelocityX(-160);
      if (this.isJump) {
        this.anims.play('jumpLeft');
      } else {
        this.anims.play('left', true);
      }
    }

    // MOVE RIGHT
    else if (cursors.right?.isDown) {
      this.direction = Direction.RIGHT;
      this.setVelocityX(160);
      if (this.isJump) {
        this.anims.play('jumpRight');
      } else {
        this.anims.play('right', true);
      }
    }

    // IN JUMP
    else if (this.isJump) {
      if (this.direction === Direction.LEFT) {
        this.anims.play('jumpLeft');
      } else {
        this.anims.play('jumpRight');
      }
    }

    // NOT MOVE
    else {
      this.setVelocityX(0);

      if (this.direction === Direction.LEFT) {
        this.anims.play('turnLeft');
      } else {
        this.anims.play('turnRight');
      }
    }

    // JUMP
    if (
      (cursors.up?.isDown || cursors.space?.isDown) &&
      this.body &&
      this.body.touching.down
    ) {
      this.setVelocityY(-350);
    }
  }
}
