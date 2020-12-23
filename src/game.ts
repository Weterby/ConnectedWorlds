import 'phaser';
import BootScene from './scenes/BootScene'
import LoadingScene from './scenes/LoadingScene'
import SplashScene from './scenes/SplashScene'
import MenuScene from './scenes/MenuScene'
import GameScene from './scenes/GameScene'
import Stats from 'stats-js/src/Stats'

let game: Phaser.Game;

class Game extends Phaser.Game
{
    public ENV: string;

    constructor(gameConfig: Phaser.Types.Core.GameConfig)
    {
        super(gameConfig);
        this.ENV = '__buildEnv__';
        if (this.ENV !== 'production') {
            this.setupStatsJS();
        }
        this.scene.add('BootScene', BootScene, true);
        this.scene.add('LoadingScene', LoadingScene, false);
        this.scene.add('SplashScene', SplashScene, false);
        this.scene.add('MenuScene', MenuScene, false);
        this.scene.add('GameState', GameScene, false);
    }
    private setupStatsJS()
    {
        const stats = Stats();
        stats.showPanel(0);
        document.body.appendChild(stats.dom);
        this.events.on(Phaser.Core.Events.PRE_STEP, () => {
            stats.begin();
        });
        this.events.on(Phaser.Core.Events.POST_RENDER, () => {
            stats.end();
        });
    }
}

window.onload = () => {
    game = new Game({
        type: Phaser.AUTO,
        width: 1366,
        height: 768,
        scale: {
            autoRound: true,
            mode: Phaser.Scale.ScaleModes.NONE,
            autoCenter: Phaser.Scale.CENTER_BOTH
        }
    });
}
