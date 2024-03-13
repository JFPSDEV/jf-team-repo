import 'phaser';

import { Level } from '../level';
import { Game, TCoordinate, TTarget } from '../types';
import theme from '../assets/theme.png';
import { ETheme } from '@jfteam/types';
import { WebSiteBlockSize, handleImpactTrigger } from '../utils';

const spriteKey = 'theme';

const sizeEl = WebSiteBlockSize;

export class ThemeManager {
  private scene: Level;
  private themeGroup: Phaser.Physics.Arcade.Group;

  constructor(scene: Level, themeList: TCoordinate[]) {
    this.scene = scene;
    this.themeGroup = this.scene.physics.add.group({
      allowGravity: false
    });
    this.initTheme();
    this.initAnims();
    this.createThemeBlock(themeList);
  }

  static load(loadScene: Phaser.Scene): void {
    loadScene.load.spritesheet(spriteKey, theme.src, {
      frameWidth: 674,
      frameHeight: 673
    });
  }

  private initTheme(): void {
    const game = this.scene.game as Game;
    this.scene.setTheme(game.params.colorScheme as ETheme);
  }

  private initAnims(): void {
    this.scene.anims.create({
      key: ETheme.DARK,
      frames: this.scene.anims.generateFrameNumbers(spriteKey, {
        start: 0,
        end: 0
      }),
      frameRate: 1,
      repeat: -1
    });

    this.scene.anims.create({
      key: ETheme.LIGHT,
      frames: this.scene.anims.generateFrameNumbers(spriteKey, {
        start: 1,
        end: 1
      }),
      frameRate: 1,
      repeat: -1
    });
  }

  handleTrigger(scene: Level, target: TTarget): ETheme {
    const isLight = scene.getTheme() === ETheme.LIGHT;
    const game = scene.game as Game;
    if (isLight) {
      scene.setTheme(ETheme.DARK);
      game.callBacks.dark();
      target.anims.play(ETheme.LIGHT);
      return ETheme.LIGHT;
    } else {
      scene.setTheme(ETheme.LIGHT);
      game.callBacks.light();
      target.anims.play(ETheme.DARK);
      return ETheme.DARK;
    }
  }

  private createThemeBlock(themeBlocks: TCoordinate[]): void {
    themeBlocks.forEach((_themeBlock) => {
      this.themeGroup.create(_themeBlock.x, _themeBlock.y, spriteKey);
    });

    const handleAction = (target: TTarget) => () => {
      if (!this.scene.getIsColider()) {
        handleImpactTrigger(
          {
            scene: this.scene,
            scale: 150,
            callBack: this.handleTrigger
          },
          target
        );
      }
    };

    const isLightMode = this.scene.getTheme() === ETheme.LIGHT;

    this.themeGroup.children.iterate(function (child) {
      const theme = child as Phaser.Physics.Arcade.Sprite;
      theme.setDepth(1);
      theme.setImmovable(true);
      theme.setInteractive();
      theme.on('pointerdown', handleAction(child));
      theme.setScale(sizeEl / theme.width, sizeEl / theme.height);
      if (isLightMode) {
        theme.play(ETheme.DARK);
      } else {
        theme.play(ETheme.LIGHT);
      }

      return null;
    });
  }

  getThemeGroup(): Phaser.Physics.Arcade.Group {
    return this.themeGroup;
  }
}
