import { blockScale } from '../../utils';
import { TCoordinate } from '../../types';

export const draw = (
  drawArray: Array<Array<null | number>>,
  startX: number,
  startY: number,
  scale: number = blockScale
) =>
  drawArray.reduce((acc: TCoordinate[], array, index) => {
    array.forEach((val, idx) => {
      if (typeof val === 'number') {
        acc.push({
          x: startX + idx * scale,
          y: startY + index * scale
        });
      }
    });
    return acc;
  }, []);
