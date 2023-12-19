// MainScene.ts

import { Phaser } from "@jfteam/phaser_next"

import sky from "./assets/sky.png";
import ground from "./assets/platform.png";
import star from "./assets/star.png";
import bomb from "./assets/bomb.png";
import dude from "./assets/dude.png";

export default class MainScene extends Phaser.Scene {
  private score: number = 0;
  private scoreText!: Phaser.GameObjects.Text;
  private platforms!: Phaser.Physics.Arcade.StaticGroup;
  private player!: Phaser.Physics.Arcade.Sprite;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private stars!: Phaser.Physics.Arcade.Group;

  preload(): void {
    this.load.image("sky", sky.src);
    this.load.image("ground", ground.src);
    this.load.image("star", star.src);
    this.load.image("bomb", bomb.src);
    this.load.spritesheet("dude", dude.src, {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create(): void {
    this.add.image(400, 300, "sky");

    this.platforms = this.physics.add.staticGroup();

    this.platforms.create(400, 568, "ground").setScale(2).refreshBody();

    this.platforms.create(600, 400, "ground");
    this.platforms.create(50, 250, "ground");
    this.platforms.create(750, 220, "ground");

    this.player = this.physics.add.sprite(100, 450, "dude");

    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "dude", frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    const playerBody = this.player.body as Phaser.Physics.Arcade.Body;
    playerBody.setGravityY(300);

    this.physics.add.collider(this.player, this.platforms);

    if (this.input?.keyboard) {
      this.cursors = this.input.keyboard.createCursorKeys();
    }

    this.stars = this.physics.add.group({
      key: "star",
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 },
    });

    this.stars.children.iterate(function (child) {
      (child as Phaser.Physics.Arcade.Sprite).setBounceY(
        Phaser.Math.FloatBetween(0.4, 0.8)
      );
      return null
    });

    this.physics.add.collider(this.stars, this.platforms);
    this.physics.add.overlap(
      this.player,
      this.stars,
      this.collectStar as Phaser.Types.Physics.Arcade.ArcadePhysicsCallback,
      undefined,
      this
    );

    this.scoreText = this.add.text(16, 16, "score: 0", {
      fontSize: "32px",
      color: "#000",
    });
  }

  collectStar(
    player: Phaser.Physics.Arcade.Sprite,
    star: Phaser.Physics.Arcade.Image
  ): void {
    star.disableBody(true, true);
    this.score += 10;
    this.scoreText.setText("Score: " + this.score);
  }

  update(): void {
    if (this.cursors.left?.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play("left", true);
    } else if (this.cursors.right?.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play("right", true);
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play("turn");
    }

    if (this.cursors.up?.isDown && this.player.body && this.player.body.touching.down) {
      this.player.setVelocityY(-500);
    }
  }
}
