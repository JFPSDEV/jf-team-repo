import 'phaser';

import { Level } from '../level';
import { EAnimation, TCoordinate } from '../types';
import { StaticImageData } from 'next/image';

export class DecorManager {
  private scene: Level;
  private keyName!: EAnimation;
  private scale: number = 0;
  private picture!: StaticImageData;
  private coordinate!: TCoordinate;

  constructor(
    scene: Level,
    keyName: EAnimation,
    scale: number,
    picture: StaticImageData,
    coordinate: TCoordinate
  ) {
    this.scene = scene;
    this.keyName = keyName;
    this.scale = scale;
    this.picture = picture;
    this.coordinate = coordinate;

    this.create();
  }

  private create(): void {
    const castle = this.scene.add.image(
      this.coordinate.x,
      this.coordinate.y,
      this.keyName
    );
    castle.setScale(
      this.scale / this.picture.width,
      this.scale / castle.height
    );
  }
}
