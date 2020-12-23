import 'phaser';

export default class GameScene extends Phaser.Scene
{
    constructor ()
    {
        super('GameScene');
    }
    create ()
    {
        console.log('GameScene');
        this.cameras.main.setBackgroundColor('#ffffff');
    }
}