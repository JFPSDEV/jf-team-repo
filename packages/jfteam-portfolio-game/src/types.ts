import 'phaser';

import type {
  ELocale,
  ETheme,
  TCallBacks,
  TGameParams
} from '@jfteam/types';

export interface PhaserGameType {
  PLAYER: Phaser.Physics.Arcade.Sprite;
  CURSORS: Phaser.Types.Input.Keyboard.CursorKeys;
}

export interface Game extends Phaser.Game {
  callBacks: TCallBacks;
  params: TGameParams;
}

export interface TCoordinate {
  x: number;
  y: number;
}

export enum EAnimation {
  TREE_LEFT = 'tree-left',
  TREE_RIGHT = 'tree-right',
  DIALOGUE_CONTROLS = 'dialogue-controls',
  LOCALE = 'locale',
  IMPACT_ANIM = 'impact-anim',
  EMPTY_BLOCK = 'empty-block',
  BLOCK_FULL = 'block-full',
  PLAYER_RIGHT = 'player-right',
  PLAYER_LEFT = 'player-left',
  PLAYER_JUMP_RIGHT = 'player-jump-right',
  PLAYER_JUMP_LEFT = 'player-jump-left',
  PLAYER_PASSIVE_RIGHT = 'player-passive-right',
  PLAYER_PASSIVE_LEFT = 'player-passive-left'
}

export enum EKey {
  IMPACT_KEY = 'impact-key',
  PLAYER_KEY = 'player-key'
}

export type TTarget = Phaser.Types.Tweens.TweenBuilderConfig['targets'];

export interface TSpBlocks extends TCoordinate {
  skills: Record<ELocale, string>[];
}
