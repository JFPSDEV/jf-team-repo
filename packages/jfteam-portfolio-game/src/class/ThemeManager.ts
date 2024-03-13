import 'phaser';

import { Level } from '../level';
import { Game, TCoordinate, TTarget } from '../types';
import theme from '../assets/theme.png';
import { ETheme } from '@jfteam/types';
import { handleImpactColision, handleImpactTrigger } from '../utils';

const spriteKey = 'theme';

const sizeEl = 50;

export class ThemeManager {
  private scene: Level;
  private themeGroup: Phaser.Physics.Arcade.Group;

  constructor(scene: Level, themeList: TCoordinate[]) {
    this.scene = scene;
    this.themeGroup = this.scene.physics.add.group({
      allowGravity: false
    });
    this.initLightMode();
    this.initAnims();
    this.createSpBlock(themeList);
  }

  static load(loadScene: Phaser.Scene): void {
    loadScene.load.spritesheet(spriteKey, theme.src, {
      frameWidth: 674,
      frameHeight: 673
    });
  }

  private initLightMode(): void {
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

  private createSpBlock(spBlocks: TCoordinate[]): void {
    spBlocks.forEach((_spBlock) => {
      this.themeGroup.create(_spBlock.x, _spBlock.y, spriteKey);
    });

    const handleAction = (target: TTarget) => () => {
      handleImpactTrigger(
        {
          scene: this.scene,
          scale: 150,
          callBack: this.handleTrigger
        },
        target
      );
    };

    this.themeGroup.children.iterate(function (child) {
      const theme = child as Phaser.Physics.Arcade.Sprite;
      theme.setImmovable(true);
      theme.setInteractive();
      theme.on('pointerdown', handleAction(child));
      theme.setScale(sizeEl / theme.width, sizeEl / theme.height);
      return null;
    });
  }

  getThemeGroup(): Phaser.Physics.Arcade.Group {
    return this.themeGroup;
  }
}
