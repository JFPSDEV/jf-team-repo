import 'phaser';

import { Level } from '../level';
import { EAnimation, TCoordinate } from '../types';
import { StaticImageData } from 'next/image';

export class SpriteManager {
  private scene: Level;
  private keyName!: EAnimation;
  private scale: number = 0;
  private picture!: StaticImageData;
  private coordinate!: TCoordinate[];
  private sprites!: Phaser.Physics.Arcade.Group;

  constructor(
    scene: Level,
    keyName: EAnimation,
    scale: number,
    picture: StaticImageData,
    coordinate: TCoordinate[]
  ) {
    this.sprites = scene.physics.add.group({
      allowGravity: false
    });

    this.scene = scene;
    this.keyName = keyName;
    this.scale = scale;
    this.picture = picture;
    this.coordinate = coordinate;

    this.create();
  }

  private create(): void {
    this.scene.anims.create({
      key: this.keyName,
      frames: this.scene.anims.generateFrameNumbers(this.keyName, {
        start: 0,
        end: 1
      }),
      frameRate: 5,
      repeat: -1
    });

    this.coordinate.forEach((_spite) => {
      this.sprites.create(_spite.x, _spite.y, this.keyName);
    });

    const sizeEl = this.scale;
    const keyName = this.keyName;

    this.sprites.children.iterate(function (child) {
      const coin = child as Phaser.Physics.Arcade.Sprite;
      coin.anims.play(keyName);
      coin.setScale(sizeEl / coin.width, sizeEl / coin.height);
      return null;
    });
  }

  public destroy(): void {
    this.sprites.clear(true, true);
  }
}
