// Player.ts

import 'phaser';

import { Direction } from '../enum/direction';
import { EAnimation, EKey, TCoordinate } from '../types';
import { Level } from '../level';
import dialogueControls from '../assets/dialogue-game-controls.png';
import { SpriteManager } from './SpriteManager';
import { playerVelocity } from '../utils';

export class Player extends Phaser.Physics.Arcade.Sprite {
  private direction: Direction;
  private isJump: boolean;
  public jumpSound!: Phaser.Sound.BaseSound;
  private jumpCoordinate: TCoordinate[] = [];
  private isAuto: boolean = true;
  private isDialogOpen = false;
  private dialogueControl: SpriteManager | null = null;

  constructor(
    scene: Level,
    x: number,
    y: number,
    jumpCoordinate: TCoordinate[]
  ) {
    super(scene, x, y, EKey.PLAYER_KEY);
    this.setScale(25 / this.width, 50 / this.height);

    this.jumpCoordinate = jumpCoordinate;
    this.direction = Direction.RIGHT;
    this.isJump = false;

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setBounce(0.2);
    this.setCollideWorldBounds(true);

    const playerBody = this.body as Phaser.Physics.Arcade.Body;
    playerBody.setGravityY(600);
  }

  goLeft(velocity: number = playerVelocity): void {
    this.direction = Direction.LEFT;
    this.setVelocityX(-velocity);
    if (this.isJump) {
      this.anims.play(EAnimation.PLAYER_JUMP_LEFT, true);
    } else {
      this.anims.play(EAnimation.PLAYER_LEFT, true);
    }
  }

  goRight(velocity: number = playerVelocity): void {
    this.direction = Direction.RIGHT;
    this.setVelocityX(velocity);
    if (this.isJump) {
      this.anims.play(EAnimation.PLAYER_JUMP_RIGHT, true);
    } else {
      this.anims.play(EAnimation.PLAYER_RIGHT, true);
    }
  }

  inJump(): void {
    if (this.direction === Direction.LEFT) {
      this.anims.play(EAnimation.PLAYER_JUMP_LEFT, true);
    } else {
      this.anims.play(EAnimation.PLAYER_JUMP_RIGHT, true);
    }
  }

  jump(): void {
    this.setVelocityY(-350);
  }

  passive(): void {
    this.setVelocityX(0);

    if (this.direction === Direction.LEFT) {
      this.anims.play(EAnimation.PLAYER_PASSIVE_LEFT);
    } else {
      this.anims.play(EAnimation.PLAYER_PASSIVE_RIGHT);
    }
  }

  loadDialogueControls(): void {
    if (!this.isDialogOpen) {
      this.isDialogOpen = true;
      this.dialogueControl = new SpriteManager(
        this.scene as Level,
        EAnimation.DIALOGUE_CONTROLS,
        110,
        dialogueControls,
        [
          {
            x: this.x + 80,
            y: this.y - 100
          }
        ],
        2
      );
    }
  }

  loadControlsAttention(): void {
    if (!this.isJump) {
      this.jump();
    }
    if (this.isJump) {
      this.inJump();
    }
    this.loadDialogueControls();
  }

  autoPlay(): void {
    if (this.jumpCoordinate?.length) {
      if (
        parseInt(`${this.x}`) + 50 <
        parseInt(`${this.jumpCoordinate[0].x}`)
      ) {
        this.goRight();
      } else if (
        parseInt(`${this.x}`) - 52 >
        parseInt(
          `${this.jumpCoordinate[this.jumpCoordinate.length - 1].x}`
        )
      ) {
        this.goLeft(0);
        this.loadControlsAttention();
      } else {
        this.goRight(100);
      }
      this.jumpCoordinate.forEach(({ x }) => {
        if (parseInt(`${this.x}`) + 15 === parseInt(`${x}`)) {
          this.jump();
        }
      });
    } else {
      this.loadControlsAttention();
    }
  }

  userPlay(cursors: Phaser.Types.Input.Keyboard.CursorKeys): void {
    // JUMP
    if (
      (cursors.up?.isDown || cursors.space?.isDown) &&
      this.body &&
      this.body.touching.down
    ) {
      this.jump();
    }

    // GO LEFT
    if (cursors.left?.isDown) {
      this.goLeft();
    }

    // GO RIGHT
    else if (cursors.right?.isDown) {
      this.goRight();
    }

    // IN JUMP
    else if (this.isJump) {
      this.inJump();
    }

    // PASSIVE
    else {
      this.passive();
    }
  }

  update(cursors: Phaser.Types.Input.Keyboard.CursorKeys): void {
    if (this.body) {
      this.isJump = !this.body.touching.down;
    }

    if (
      cursors.right?.isDown ||
      cursors.left?.isDown ||
      cursors.up?.isDown ||
      cursors.space?.isDown
    ) {
      if (this.isDialogOpen) {
        this.dialogueControl?.destroy();
      }

      this.isAuto = false;
    }

    if (this.isAuto) {
      this.autoPlay();
    } else {
      this.userPlay(cursors);
    }
  }
}
