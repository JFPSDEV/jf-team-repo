// CoinManager.ts

import 'phaser';

import { TCoordinate } from '../types';
import coins from '../assets/coins.png';
import { coinScale } from '../utils';

const sizeEl = coinScale;

export class CoinManager {
  private score: number = 0;
  private scene: Phaser.Scene;
  private scoreText!: Phaser.GameObjects.Text;
  private coinsGroup: Phaser.Physics.Arcade.Group;

  constructor(scene: Phaser.Scene, coins: TCoordinate[]) {
    this.scene = scene;
    this.coinsGroup = this.scene.physics.add.group({
      allowGravity: false
    });
    this.createCoins(coins);
    // this.initScoreText();
    this.handleCoinCollision = this.handleCoinCollision.bind(this);
  }

  static load(loadScene: Phaser.Scene): void {
    loadScene.load.spritesheet('coins', coins.src, {
      frameWidth: coins.height,
      frameHeight: coins.height
    });
  }

  private initScoreText(): void {
    this.scoreText = this.scene.add.text(16, 16, 'score: 0', {
      fontSize: '32px',
      color: '#000'
    });
  }

  private createCoins(coins: TCoordinate[]): void {
    this.scene.anims.create({
      key: 'coinAnims',
      frames: this.scene.anims.generateFrameNumbers('coins', {
        start: 0,
        end: 3
      }),
      frameRate: 5,
      repeat: -1
    });

    coins.forEach((_coin) => {
      this.coinsGroup.create(_coin.x, _coin.y, 'coins');
    });

    this.coinsGroup.children.iterate(function (child) {
      const coin = child as Phaser.Physics.Arcade.Sprite;
      coin.anims.play('coinAnims');
      coin.setScale(sizeEl / coin.width, sizeEl / coin.height);
      return null;
    });
  }

  handleCoinCollision(
    player: Phaser.Physics.Arcade.Sprite,
    coin: Phaser.Physics.Arcade.Image
  ): void {
    this.scene.physics.world.disableBody(
      coin?.body as Phaser.Physics.Arcade.Body
    );
    coin.disableBody(true, true);
    this.score += 10;
    if (this.scoreText) {
      this.scoreText.setText('Score: ' + this.score);
    }
  }

  getCoinsGroup(): Phaser.Physics.Arcade.Group {
    return this.coinsGroup;
  }
}
