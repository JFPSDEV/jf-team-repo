import { Level } from './Level';
import { coinScale, getPercent } from '../utils';
import { drawCvCoins, draw } from './draw';

export class CVLevel extends Level {
  create(): void {
    const W = this.cameras.main.width;
    var H = this.cameras.main.height;

    const centerX = getPercent(50, W);

    const startY = 130;
    const startX = centerX - 160;

    this.createGame({
      playerStart: { x: getPercent(10, W), y: getPercent(50, H) },
      coins: draw(drawCvCoins, startX, startY, coinScale)
    });
  }
}
