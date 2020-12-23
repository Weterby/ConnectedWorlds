import 'phaser';

export default class BootScene extends Phaser.Scene
{
    constructor ()
    {
        super('BootScene');
    }
    create ()
    {
        console.log('BootScene');
        this.game.scene.start('LoadingScene');
    }
}