import 'phaser';

export default class LoadingScene extends Phaser.Scene
{
    constructor ()
    {
        super('LoadingScene');
    }
    create ()
    {
        console.log('LoadingScene');
        this.game.scene.start('SplashScene');
    }
}