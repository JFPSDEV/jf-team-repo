import 'phaser';

import { DudePlayer } from '../class/DudePlayer';
import { CoinManager } from '../class/CoinManager';
import { SPBlockManager } from '../class/SPBlockManager';
import { GroundBlockManager } from '../class/GroundBlockManager';
import { PowBlockManager } from '../class/PowBlockManager';
import { CastleManager } from '../class/CastleManager';
import { FlagManager } from '../class/FlagManager';
import { SkyManager } from '../class/SkyManager';
import { getPercent } from '../utils';
import { TCoordinate } from '../types';

interface ILevelGame {
  playerStart: TCoordinate;
  coins?: TCoordinate[];
  spBlocks?: TCoordinate[];
}

export class Level extends Phaser.Scene {
  protected player!: DudePlayer;
  protected groundBlockManager!: GroundBlockManager;
  protected cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  protected coinManager!: CoinManager;
  protected sPBlockManager!: SPBlockManager;
  protected castleManager!: CastleManager;
  protected flagManager!: FlagManager;
  protected powBlockManager!: PowBlockManager;
  protected isLightMode: boolean = true;
  protected sky!: SkyManager;

  preload(): void {
    GroundBlockManager.loadSprite(this);
    SkyManager.loadSprite(this);
    DudePlayer.loadSprite(this);
    CoinManager.loadSprite(this);
    SPBlockManager.loadSprite(this);
    CastleManager.loadSprite(this);
    FlagManager.loadSprite(this);
    PowBlockManager.loadSprite(this);
  }

  createGame(params: ILevelGame): void {
    const playerStart = params.playerStart;
    const coins = params?.coins;
    const spBlocks = params?.spBlocks;

    const W = this.cameras.main.width;
    var H = this.cameras.main.height;

    /**
     * SKY
     * -----------
     */
    this.sky = new SkyManager(this);

    if (this.input?.keyboard) {
      this.cursors = this.input.keyboard.createCursorKeys();
    }

    /**
     * FLAG
     * -----------
     */

    this.flagManager = new FlagManager(this, {
      x: W - 170,
      y: getPercent(44, H)
    });

    /**
     * CASTLE
     * -----------
     */
    this.castleManager = new CastleManager(this, {
      x: W - 40,
      y: getPercent(46, H)
    });

    /**
     * BLOCK [?]
     * -----------
     */
    if (spBlocks && spBlocks?.length) {
      this.sPBlockManager = new SPBlockManager(this, spBlocks);
    }

    /**
     * BLOCK POW
     * -----------
     */
    const isSmallScreen = W >= 1200 ? 300 : 250;
    this.powBlockManager = new PowBlockManager(
      this,
      [
        {
          x: getPercent(isSmallScreen ? 30 : 35, W),
          y: getPercent(40, H)
        },
        { x: getPercent(isSmallScreen ? 70 : 65, W), y: getPercent(40, H) }
      ],
      [this.castleManager.updateCastle]
    );

    /**
     * GROUND
     * -----------
     */
    this.groundBlockManager = new GroundBlockManager(this);
    this.groundBlockManager.createGroundBlocks();

    /**
     * PLAYER
     * -----------
     */
    this.player = new DudePlayer(this, playerStart.x, playerStart.y);
    this.player.setInteractive();

    this.physics.add.collider(
      this.player,
      this.groundBlockManager.getGroundBlocks()
    );

    /**
     * COINS
     * -----------
     */
    // this.coinManager = new CoinManager(this, [
    //   { x: W / 2 - 100, y: H / 1.5 },
    //   { x: W / 2, y: H / 1.5 },
    //   { x: W / 2 + 100, y: H / 1.5 }
    // ]);

    if (spBlocks) {
      this.physics.add.collider(
        this.sPBlockManager.getSpBlockGroup(),
        this.player,
        this.sPBlockManager
          .handleSpBlockCollision as Phaser.Types.Physics.Arcade.ArcadePhysicsCallback
      );
    }

    // this.physics.add.overlap(
    //   this.player,
    //   this.coinManager.getCoinsGroup(),
    //   this.coinManager
    //     .handleCoinCollision as Phaser.Types.Physics.Arcade.ArcadePhysicsCallback,
    //   undefined,
    //   this
    // );
  }

  update(): void {
    this.player.update(this.cursors);
  }

  public getIsLightMode(): boolean {
    return this.isLightMode;
  }

  public setIsLightMode(value: boolean): void {
    this.isLightMode = value;
  }
}
