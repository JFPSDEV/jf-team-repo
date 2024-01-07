// MainScene.ts

import 'phaser';

import sky from './assets/sky.png';
import bomb from './assets/bomb.png';
import brick from './assets/brick.png';
import platform from './assets/platform.png';
import groundBlock1 from './assets/groundBlock1.png';
import groundBlock2 from './assets/groundBlock2.png';

import { DudePlayer } from './class/DudePlayer';
import { CoinManager } from './class/CoinManager';
import { SPBlockManager } from './class/SPBlockManager';
import { GroundBlockManager } from './class/GroundBlockManager';
import { CastleManager } from './class/CastleManager';
import { FlagManager } from './class/FlagManager';

export class MainScene extends Phaser.Scene {
  private player!: DudePlayer;
  private groundBlockManager!: GroundBlockManager;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private coinManager!: CoinManager;
  private sPBlockManager!: SPBlockManager;
  private castleManager!: CastleManager;
  private flagManager!: FlagManager;

  preload(): void {
    this.load.image('sky', sky.src);
    this.load.image('groundBlock1', groundBlock1.src);
    this.load.image('groundBlock2', groundBlock2.src);
    this.load.image('platform', platform.src);
    this.load.image('bomb', bomb.src);
    this.load.image('brick', brick.src);
    DudePlayer.loadSprite(this);
    CoinManager.loadSprite(this);
    SPBlockManager.loadSprite(this);
    CastleManager.loadSprite(this);
    FlagManager.loadSprite(this);
  }

  create(): void {
    const W = this.cameras.main.width;
    var H = this.cameras.main.height;

    const isMobile = this.cameras.main.width <= 600;

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

    this.player = new DudePlayer(this, W / 12, 0);
    this.player.setInteractive();

    this.physics.add.collider(
      this.player,
      this.groundBlockManager.getGroundBlocks()
    );

    if (this.input?.keyboard) {
      this.cursors = this.input.keyboard.createCursorKeys();
    }

    // Brick
    // const brick = this.add.image(400, H / 2, 'brick');
    // brick.setScale(25 / brick.width, 25 / brick.height);
    if (!isMobile) {
      // Flag
      this.flagManager = new FlagManager(this, {
        x: W - 300,
        y: H / 2.1
      });
    }

    // Castle
    this.castleManager = new CastleManager(this, {
      x: W - (isMobile ? 40 : 100),
      y: H / 1.8
    });

    // SpBlock
    this.sPBlockManager = new SPBlockManager(this, [
      { x: W / 2 - 100, y: H / 2 },
      { x: W / 2, y: H / 2 },
      { x: W / 2 + 100, y: H / 2 }
    ]);

    // Coins
    this.coinManager = new CoinManager(this, [
      { x: W / 2 - 100, y: H / 1.5 },
      { x: W / 2, y: H / 1.5 },
      { x: W / 2 + 100, y: H / 1.5 }
    ]);

    this.physics.add.collider(
      this.sPBlockManager.getSpBlockGroup(),
      this.player,
      this.sPBlockManager
        .handleSpBlockCollision as Phaser.Types.Physics.Arcade.ArcadePhysicsCallback
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
