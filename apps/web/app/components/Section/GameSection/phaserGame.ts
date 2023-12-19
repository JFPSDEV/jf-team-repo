// phaserGame.ts

export const gameId: string = 'phaser-game';

export const config: Phaser.Types.Core.GameConfig = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    parent: gameId,
};

export const loadGame = async (conf: Phaser.Types.Core.GameConfig, ClassMain: Phaser.Types.Scenes.SceneType): Promise<Phaser.Game | undefined> => {
    if (typeof window !== 'object') {
        return;
    }

    let game: Phaser.Game = new Phaser.Game(conf);
    game.scene.add('main', ClassMain);
    game.scene.start('main');
    
    return game;
};
