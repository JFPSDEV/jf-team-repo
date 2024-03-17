import { Level } from './Level';
import { coinScale, getPercent } from '../utils';
import {
  drawCvCoins,
  draw,
  coinsNumberInWidth,
  drawNotFound,
  notFoundNumberInWidth
} from './draw';

export class NotFoundLevel extends Level {
  create(): void {
    const W = this.cameras.main.width;
    var H = this.cameras.main.height;

    const centerX = getPercent(50, W);

    const startY = getPercent(35, H);
    const startX = centerX - (notFoundNumberInWidth * coinScale) / 2 + 10;

    this.createGame({
      playerStart: { x: getPercent(10, W), y: getPercent(60, H) },
      coins: draw(drawNotFound, startX, startY, coinScale)
    });
  }
}
