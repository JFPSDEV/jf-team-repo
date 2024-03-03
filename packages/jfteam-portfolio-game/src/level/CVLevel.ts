import { getPercent } from '../utils';
import { Level } from './Level';

export class CVLevel extends Level {
  create(): void {
    const W = this.cameras.main.width;
    var H = this.cameras.main.height;

    this.createGame({
      playerStart: { x: getPercent(10, W), y: getPercent(50, H) }
    });
  }
}
