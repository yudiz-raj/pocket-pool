class SoundManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.ballHittingSound = this.oScene.sound.add("ballHitting");
        this.clickSound = this.oScene.sound.add("Click");
        this.levelWinSound = this.oScene.sound.add("LevelWin");
    }
    playSound(key, loop) {
        key.play();
        key.loop = loop;
    }
    stopSound(key, loop) {
        key.loop = loop
        key.stop();
    }
}