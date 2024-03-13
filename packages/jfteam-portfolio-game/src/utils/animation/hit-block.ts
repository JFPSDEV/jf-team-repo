import { EAnimation, EKey, TSpBlocks, TTarget } from '../../types';
import { Level } from '../../level';
import { ELocale, ETheme } from '@jfteam/types';
import { WebSiteBlockSize, blockY, spBlockSize } from '..';

type EnumKeys = EAnimation | ETheme | ELocale;

interface TParams {
  scene: Level;
  scale?: number;
  startAnim?: EnumKeys;
  endAnim?: EnumKeys;
  callBack?: (scene: Level, target: TTarget) => EnumKeys;
  impactDisable?: boolean;
}

interface TSpBlockParams extends TParams {
  group?: Phaser.Physics.Arcade.Group;
  spBlocks?: TSpBlocks[];
}

export const handleImpactTrigger = (
  params: TParams,
  el: TTarget,
  player?: Phaser.Physics.Arcade.Sprite
) => {
  const {
    scene,
    scale = 100,
    startAnim = EAnimation.EMPTY_BLOCK,
    endAnim = EAnimation.EMPTY_BLOCK,
    impactDisable = false,
    callBack
  } = params;

  scene.setIsColider(true);

  el.anims.play(startAnim);

  let animationStop: EnumKeys = endAnim;
  let impactSprite: Phaser.GameObjects.Sprite;

  if (typeof callBack === 'function') {
    animationStop = callBack(scene, el);
  }

  if (!impactDisable) {
    impactSprite = scene.add.sprite(el.x - 5, el.y - 5, EKey.IMPACT_KEY);

    scene.anims.create({
      key: EAnimation.IMPACT_ANIM,
      frames: scene.anims.generateFrameNumbers(EKey.IMPACT_KEY, {
        start: 0,
        end: 8
      }),
      frameRate: 50,
      repeat: 0
    });

    impactSprite.setScale(scale / 415, scale / 416);
    impactSprite.anims.play(EAnimation.IMPACT_ANIM);
  }

  scene.tweens?.add({
    targets: el,
    y: el.y - 10,
    duration: 200,
    yoyo: true,
    ease: 'Linear',
    onComplete: () => {
      scene.setIsColider(false);
      if (!impactDisable) impactSprite.destroy();
      el.anims.play(animationStop);
    }
  });
};

const handleSpBlockTrigger = (
  params: TSpBlockParams,
  el: TTarget,
  player?: Phaser.Physics.Arcade.Sprite
) => {
  const { scene, group } = params;

  scene.setIsColider(true);

  const emptyBlock = {
    ...params,
    endAnim: EAnimation.EMPTY_BLOCK,
    impactDisable: true
  };

  if (group) {
    const locale = scene.getLocale();
    const index = group.getChildren().indexOf(el);
    const spBlockList = scene.getSpBlockList();

    if (spBlockList[index].skills?.length) {
      handleImpactTrigger(params, el, player);

      const currentSpBlock = spBlockList[index].skills;
      const skill = currentSpBlock[0][locale];

      const dispaySkill = scene.add.text(el.x, el.y, skill, {
        fontSize: '16px',
        color: '#ffffff'
      });

      scene.tweens?.add({
        targets: dispaySkill,
        y: el.y - 80,
        duration: 2000,
        yoyo: false,
        ease: 'Linear',
        onComplete: () => {
          dispaySkill.destroy();
        }
      });

      currentSpBlock.shift();
      spBlockList[index].skills = currentSpBlock;

      if (!spBlockList[index].skills.length) {
        handleImpactTrigger(emptyBlock, el, player);
      }
      scene.setSpBlockList(spBlockList);
    } else {
      handleImpactTrigger(emptyBlock, el, player);
    }
  }
};

export const handleImpactColision = (params: TParams) => {
  return (
    player: Phaser.Physics.Arcade.Sprite,
    el: Phaser.Physics.Arcade.Sprite
  ) => {
    const playerY = parseInt(`${player.y}`);
    const collisionRefused =
      parseInt(`${playerY}`) < blockY + WebSiteBlockSize;

    if (!collisionRefused && !params.scene.getIsColider()) {
      handleImpactTrigger(params, el, player);
    }
  };
};

export const handleBlockSpColision = (params: TSpBlockParams) => {
  return (
    player: Phaser.Physics.Arcade.Sprite,
    el: Phaser.Physics.Arcade.Sprite
  ) => {
    const playerY = parseInt(`${player.y}`);
    const bottomBlockY = blockY + spBlockSize;
    const collisionRefused = parseInt(`${playerY}`) < bottomBlockY;

    if (!collisionRefused && !params.scene.getIsColider()) {
      handleSpBlockTrigger(params, el, player);
    }
  };
};
