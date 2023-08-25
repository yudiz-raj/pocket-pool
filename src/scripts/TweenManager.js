class TweenManager {
    constructor(oScene) {
        this.oScene = oScene;
    }

    buttonAnimation(target) {
        this.oScene.add.tween({
            targets: target,
            scaleX: "*=0.8",
            scaleY: "*=0.8",
            duration: 80,
            yoyo: true,
            onComplete: () => {
                if (target.list[1].text == "RETRY") {
                    this.oScene.scene.restart("Level");
                }
                if (target.list[1].text == "REPLAY") {
                    this.oScene.scene.stop("LevelUp");
                    this.oScene.scene.start("Loading");
                }
            }
        });
    }
}