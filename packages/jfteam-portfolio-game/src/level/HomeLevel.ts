import { getPercent } from '../utils';
import { Level } from './Level';

export class HomeLevel extends Level {
  create(): void {
    const W = this.cameras.main.width;
    var H = this.cameras.main.height;

    this.createGame({
      playerStart: { x: getPercent(10, W), y: getPercent(50, H) },
      spBlocks: [
        { x: getPercent(50, W) - 100, y: getPercent(40, H) },
        { x: getPercent(50, W), y: getPercent(40, H) },
        { x: getPercent(50, W) + 100, y: getPercent(40, H) }
      ]
    });
  }
}
