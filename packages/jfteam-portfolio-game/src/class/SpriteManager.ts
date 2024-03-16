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
  private depth: number = 0;

  constructor(
    scene: Level,
    keyName: EAnimation,
    scale: number,
    picture: StaticImageData,
    coordinate: TCoordinate[],
    depth: number = 0
  ) {
    this.depth = depth;
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

    const depth = this.depth;

    this.sprites.children.iterate(function (child) {
      const sprite = child as Phaser.Physics.Arcade.Sprite;
      sprite.anims.play(keyName);
      sprite.setScale(sizeEl / sprite.width, sizeEl / sprite.height);
      sprite.setDepth(depth);
      return null;
    });
  }

  public destroy(): void {
    this.sprites.clear(true, true);
  }
}
