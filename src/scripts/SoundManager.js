class SoundManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.backgroundMusic = this.oScene.sound.add("background");
        this.ballHittingWallSound = this.oScene.sound.add("wall-hit");
        this.ballFallInHoleSound = this.oScene.sound.add("cueBall-inHole");
        this.clickSound = this.oScene.sound.add("click");
        this.levelTrasitionSound = this.oScene.sound.add("level-change");
        this.shotSound = this.oScene.sound.add("shot-play");
        this.tryAgainSound = this.oScene.sound.add("try-again");
        this.congratulationSound = this.oScene.sound.add("congratulation");
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