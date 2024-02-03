import type { TCallBacks } from '@jfteam/types';

export class Game<T = Object> extends Phaser.Game {
  private callBacks: TCallBacks;
  private params: T | Object;

  constructor(
    config: Phaser.Types.Core.GameConfig,
    callBacks: TCallBacks | undefined,
    params: T | Object | undefined
  ) {
    super(config);
    this.callBacks = callBacks || {};
    this.params = params || {};
  }
}
