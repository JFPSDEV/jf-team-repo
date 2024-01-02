// MainScene.ts

import { Phaser } from '@jfteam/phaser_next';

import sky from './assets/sky.png';
import platform from './assets/platform.png';
import groundBlock1 from './assets/groundBlock1.png';
import groundBlock2 from './assets/groundBlock2.png';
import brick from './assets/brick.png';
import bomb from './assets/bomb.png';
import { DudePlayer } from './class/DudePlayer';
import { GroundBlockManager } from './class/GroundBlockManager';
import { CoinManager } from './class/CoinManager';

export default class MainScene extends Phaser.Scene {
  private player!: DudePlayer;
  private groundBlockManager!: GroundBlockManager;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private coinManager!: CoinManager;

  preload(): void {
    this.load.image('sky', sky.src);
    this.load.image('groundBlock1', groundBlock1.src);
    this.load.image('groundBlock2', groundBlock2.src);
    this.load.image('platform', platform.src);
    this.load.image('bomb', bomb.src);
    this.load.image('brick', brick.src);
    DudePlayer.loadSprite(this);
    CoinManager.loadSprite(this);
  }

  create(): void {
    // Sky
    const sky = this.add.tileSprite(
      0,
      0,
      this.cameras.main.width,
      this.cameras.main.height,
      'sky'
    );
    sky.setOrigin(0, 0);

    this.groundBlockManager = new GroundBlockManager(this);
    this.groundBlockManager.createGroundBlocks();

    this.player = new DudePlayer(this, 900, 450);

    this.physics.add.collider(
      this.player,
      this.groundBlockManager.getGroundBlocks()
    );

    if (this.input?.keyboard) {
      this.cursors = this.input.keyboard.createCursorKeys();
    }

    // Brick
    const brick = this.add.image(400, 300, 'brick');
    brick.setScale(25 / brick.width, 25 / brick.height);

    // Coins
    this.coinManager = new CoinManager(this, [
      { x: 300, y: 530 },
      { x: 400, y: 530 },
      { x: 500, y: 530 }
    ]);

    this.physics.add.collider(
      this.coinManager.getCoinsGroup(),
      this.groundBlockManager.getGroundBlocks()
    );

    this.physics.add.overlap(
      this.player,
      this.coinManager.getCoinsGroup(),
      this.coinManager
        .handleCoinCollision as Phaser.Types.Physics.Arcade.ArcadePhysicsCallback,
      undefined,
      this
    );
  }

  update(): void {
    this.player.update(this.cursors);
  }
}
