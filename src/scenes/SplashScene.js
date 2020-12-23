import 'phaser';

export default class SplashScene extends Phaser.Scene
{
    constructor ()
    {
        super('SplashScene');
    }
    create ()
    {
        console.log('SplashScene');
        this.game.scene.start('MenuScene');
    }
}