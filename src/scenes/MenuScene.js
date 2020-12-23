import 'phaser';

export default class MenuScene extends Phaser.Scene
{
    constructor ()
    {
        super('MenuScene');
    }
    create ()
    {
        console.log('MenuScene');
        this.game.scene.start('GameScene');
    }
}