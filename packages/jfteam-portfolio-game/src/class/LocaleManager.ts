import 'phaser';

import { Level } from '../level';
import { EAnimation, Game, TCoordinate, TTarget } from '../types';
import locale from '../assets/locale.png';
import { ELocale } from '@jfteam/types';
import { handleImpactTrigger } from '../utils';

const spriteKey = EAnimation.LOCALE;
const sizeEl = 50;

export class LocaleManager {
  private scene: Level;
  private localeGroup: Phaser.Physics.Arcade.Group;

  constructor(scene: Level, localeList: TCoordinate[]) {
    this.scene = scene;
    this.localeGroup = this.scene.physics.add.group({
      allowGravity: false
    });
    this.initLocale();
    this.initAnims();
    this.createSpBlock(localeList);
  }

  static load(loadScene: Phaser.Scene): void {
    loadScene.load.spritesheet(spriteKey, locale.src, {
      frameWidth: 674,
      frameHeight: 673
    });
  }

  private initLocale(): void {
    const game = this.scene.game as Game;
    this.scene.setLocale(game.params.locale);
  }

  private initAnims(): void {
    this.scene.anims.create({
      key: ELocale.EN,
      frames: this.scene.anims.generateFrameNumbers(spriteKey, {
        start: 0,
        end: 0
      }),
      frameRate: 0,
      repeat: 0
    });

    this.scene.anims.create({
      key: ELocale.FR,
      frames: this.scene.anims.generateFrameNumbers(spriteKey, {
        start: 1,
        end: 1
      }),
      frameRate: 0,
      repeat: 0
    });
  }

  public handleTrigger(scene: Level, target: TTarget): ELocale {
    const isFrench = scene.getLocale() === ELocale.FR;
    const game = scene.game as Game;

    if (isFrench) {
      scene.setLocale(ELocale.EN);
      game.callBacks.switchEn();
      target.anims.play(ELocale.FR);
      return ELocale.FR;
    } else {
      scene.setLocale(ELocale.FR);
      game.callBacks.switchFr();
      target.anims.play(ELocale.EN);
      return ELocale.EN;
    }
  }

  private createSpBlock(spBlocks: TCoordinate[]): void {
    spBlocks.forEach((_spBlock) => {
      this.localeGroup.create(_spBlock.x, _spBlock.y, spriteKey);
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

    this.localeGroup.children.iterate(function (child) {
      const locale = child as Phaser.Physics.Arcade.Sprite;
      locale.setImmovable(true);
      locale.anims.play('localeAnims');
      locale.setInteractive();
      locale.on('pointerdown', handleAction(child));
      locale.setScale(sizeEl / locale.width, sizeEl / locale.height);
      return null;
    });
  }

  public getLocaleGroup(): Phaser.Physics.Arcade.Group {
    return this.localeGroup;
  }
}
