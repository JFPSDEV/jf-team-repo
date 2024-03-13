import { ELocale } from '@jfteam/types';
import { blockY, getPercent } from '../utils';
import { Level } from './Level';

export class HomeLevel extends Level {
  create(): void {
    const W = this.cameras.main.width;
    var H = this.cameras.main.height;

    const centerX = getPercent(50, W);
    const centerY = getPercent(50, H);

    console.log({ blockY });

    this.createGame({
      playerStart: { x: getPercent(10, W), y: centerY },
      spBlocks: [
        {
          x: centerX - 100,
          y: blockY,
          skills: [
            { [ELocale.FR]: 'Optimisation', [ELocale.EN]: `Optimization` },
            { [ELocale.FR]: 'Test', [ELocale.EN]: `Test` },
            {
              [ELocale.FR]: 'Veille technologique',
              [ELocale.EN]: `Technology watch`
            }
          ]
        },
        {
          x: centerX,
          y: blockY,
          skills: [
            { [ELocale.FR]: 'Performances', [ELocale.EN]: `Performance` },
            { [ELocale.FR]: 'Qualité', [ELocale.EN]: `Quality` },
            { [ELocale.FR]: 'Débogage', [ELocale.EN]: `Debugging` }
          ]
        },
        {
          x: centerX + 100,
          y: blockY,
          skills: [
            {
              [ELocale.FR]: 'Sécurité',
              [ELocale.EN]: `Security`
            },
            { [ELocale.FR]: `Travail d'équipe`, [ELocale.EN]: `Teamwork` },
            { [ELocale.FR]: 'Plannification', [ELocale.EN]: `Planning` }
          ]
        }
      ]
    });
  }
}
