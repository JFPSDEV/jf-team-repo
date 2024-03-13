import 'phaser';

import { ELocale, ETheme } from '@jfteam/types';

import { DudePlayer } from '../class/DudePlayer';
import { CoinManager } from '../class/CoinManager';
import { SPBlockManager } from '../class/SPBlockManager';
import { GroundBlockManager } from '../class/GroundBlockManager';
import { ThemeManager } from '../class/ThemeManager';
import { SkyManager } from '../class/SkyManager';
import {
  getPercent,
  handleBlockSpColision,
  handleImpactColision
} from '../utils';
import { EAnimation, TCoordinate, TSpBlocks } from '../types';
import { LocaleManager } from '../class/LocaleManager';
import { DecorManager } from '../class/DecorManager';

import treeLeftPicture from '../assets/tree-left.png';
import treeRightPicture from '../assets/tree-right.png';
import dialogueControls from '../assets/dialogue-game-controls.png';
import impact from '../assets/hit-animation.png';

interface ILevelGame {
  playerStart: TCoordinate;
  coins?: TCoordinate[];
  spBlocks?: TSpBlocks[];
}

export class Level extends Phaser.Scene {
  protected theme: ETheme = ETheme.LIGHT;
  protected themeManager!: ThemeManager;

  protected locale: ELocale = ELocale.FR;
  protected localeManager!: LocaleManager;

  protected spBlockList: TSpBlocks[] = [];

  protected sky!: SkyManager;
  protected player!: DudePlayer;
  protected coinManager!: CoinManager;
  protected sPBlockManager!: SPBlockManager;
  protected groundBlockManager!: GroundBlockManager;
  protected cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  protected treeLeft!: DecorManager;
  protected treeRight!: DecorManager;

  preload(): void {
    this.load.image(EAnimation.TREE_LEFT, treeLeftPicture.src);
    this.load.image(EAnimation.TREE_RIGHT, treeRightPicture.src);
    this.load.spritesheet(
      EAnimation.DIALOGUE_CONTROLS,
      dialogueControls.src,
      {
        frameWidth: 1316,
        frameHeight: dialogueControls.height
      }
    );
    this.load.spritesheet(EAnimation.IMPACT, impact.src, {
      frameWidth: 415,
      frameHeight: 416
    });
    LocaleManager.load(this);
    GroundBlockManager.load(this);
    SkyManager.load(this);
    DudePlayer.load(this);
    CoinManager.load(this);
    SPBlockManager.load(this);
    ThemeManager.load(this);
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

    /**
     * CONTROLS
     * -----------
     */
    if (this.input?.keyboard) {
      this.cursors = this.input.keyboard.createCursorKeys();
    }

    /**
     * BLOCK [?]
     * -----------
     */
    if (spBlocks && spBlocks?.length) {
      this.setSpBlockList(spBlocks);
      this.sPBlockManager = new SPBlockManager(this, spBlocks);
    }

    /**
     * THEME
     * -----------
     */
    const isSmallScreen = W >= 1200 ? 300 : 250;
    this.themeManager = new ThemeManager(this, [
      {
        x: getPercent(isSmallScreen ? 30 : 35, W),
        y: getPercent(40, H)
      }
    ]);

    /**
     * LOCALE
     * -----------
     */
    this.localeManager = new LocaleManager(this, [
      { x: getPercent(isSmallScreen ? 70 : 65, W), y: getPercent(40, H) }
    ]);

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
    this.player = new DudePlayer(
      this,
      playerStart.x,
      playerStart.y,
      spBlocks || []
    );
    this.player.setInteractive();

    this.physics.add.collider(
      this.player,
      this.groundBlockManager.getGroundBlocks()
    );

    /**
     * COINS
     * -----------
     */
    if (coins && coins?.length) {
      this.coinManager = new CoinManager(this, coins);
    }

    /**
     * COLISION ACTION BLOCK
     * -----------
     */
    const colisionThemeBlock = handleImpactColision({
      scene: this,
      scale: 150,
      callBack: this.themeManager.handleTrigger
    });

    const colisionLocaleBlock = handleImpactColision({
      scene: this,
      scale: 150,
      callBack: this.localeManager.handleTrigger
    });

    /**
     * PLAYER COLISION TO BLOCK [?]
     * -----------
     */
    if (spBlocks && spBlocks?.length) {
      const colisionSpBlock = handleBlockSpColision({
        scene: this,
        endAnim: EAnimation.BLOCK_FULL,
        group: this.sPBlockManager.getSpBlockGroup()
      });

      this.physics.add.collider(
        this.sPBlockManager.getSpBlockGroup(),
        this.player,
        colisionSpBlock as Phaser.Types.Physics.Arcade.ArcadePhysicsCallback
      );
    }

    /**
     * PLAYER COLISION TO COINS
     * -----------
     */
    if (coins && coins?.length) {
      this.physics.add.overlap(
        this.player,
        this.coinManager.getCoinsGroup(),
        this.coinManager
          .handleCoinCollision as Phaser.Types.Physics.Arcade.ArcadePhysicsCallback,
        undefined,
        this
      );
    }

    /**
     * PLAYER COLISION TO THEME
     * -----------
     */

    this.physics.add.collider(
      this.themeManager.getThemeGroup(),
      this.player,
      colisionThemeBlock as Phaser.Types.Physics.Arcade.ArcadePhysicsCallback
    );

    /**
     * PLAYER TO LOCALE
     * -----------
     */

    this.physics.add.collider(
      this.localeManager.getLocaleGroup(),
      this.player,
      colisionLocaleBlock as Phaser.Types.Physics.Arcade.ArcadePhysicsCallback
    );

    /**
     * TREE
     * -----------
     */
    this.treeLeft = new DecorManager(
      this,
      EAnimation.TREE_LEFT,
      240,
      treeRightPicture,
      {
        x: W - 40,
        y: getPercent(39, H)
      }
    );
    this.treeRight = new DecorManager(
      this,
      EAnimation.TREE_RIGHT,
      240,
      treeLeftPicture,
      {
        x: 40,
        y: getPercent(39, H)
      }
    );
  }

  update(): void {
    this.player.update(this.cursors);
  }

  public getTheme(): ETheme {
    return this.theme;
  }

  public setTheme(value: ETheme): void {
    this.theme = value;
  }

  public getLocale(): ELocale {
    return this.locale;
  }

  public setLocale(value: ELocale): void {
    this.locale = value;
  }

  public getSpBlockList(): TSpBlocks[] {
    return this.spBlockList;
  }

  public setSpBlockList(value: TSpBlocks[]): void {
    this.spBlockList = value;
  }
}
