class TweenManager {
    constructor(oScene) {
        this.oScene = oScene;
    }

    popUpAnimation(target, duration) {
        this.oScene.add.tween({
            targets: target,
            scaleX: "*=0.8",
            scaleY: "*=0.8",
            ease: "Linear",
            duration: duration,
            yoyo: true,
            onComplete: () => {
                if (target.name == "Try Again" || target.name == "container_retry") {
                    setTimeout(() => {
                        this.oScene.scene.restart("Level");
                    }, 1000);
                }
                if(target.nama == "playButton"){
                    this.popUpAnimation(target);
                }
                if (target.name == "container_replay") {
                    this.oScene.scene.stop("LevelUp");
                    this.oScene.scene.start("Loading");
                }
            }
        });
    }

    winningAnimation(target, scale) {
        this.oScene.add.tween({
            targets: target,
            scaleX: scale,
            scaleY: scale,
            ease: "power2",
            duration: 400,
            // yoyo: true,
        });
    }

    shakeAnimation() {
        this.oScene.add.tween({
            targets: this.oScene.container_retry,
            angle: -5,
            duration: 30,
            ease: "Power2",
            yoyo: true,
            repeate: 2,
            onComplete: () => {
                this.oScene.add.tween({
                    targets: this.oScene.container_retry,
                    angle: 5,
                    duration: 30,
                    ease: "Power2",
                    yoyo: true,
                    repeate: 2,
                });
            }
        });
    }
}