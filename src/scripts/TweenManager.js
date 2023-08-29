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
                if (target.list[1].text == nRetryCount) {
                    this.oScene.scene.restart("Level");
                }
                if (target.list[1].text == "REPLAY") {
                    this.oScene.scene.stop("LevelUp");
                    this.oScene.scene.start("Loading");
                }
            }
        });
    }

    popUpAnimation(target) {
        this.oScene.add.tween({
            targets: target,
            scaleX: "*=0.8",
            scaleY: "*=0.8",
            ease: "Linear",
            duration: 350,
            yoyo: true,
            onComplete: () => {
                if (target.texture.key == "Try-again") {
                    setTimeout(() => {
                        this.oScene.scene.restart("Level");
                    }, 1000);
                }
            }
        });
    }

    winningAnimation(target, scale){
        this.oScene.add.tween({
            targets: target,
            scaleX: scale,
            scaleY: scale,
            ease: "power2",
            duration: 400,
            // yoyo: true,
        });
    }

    shakeAnimation(){
        this.oScene.add.tween({
            targets: this.oScene.container_retry,
            angle: -10,
            duration: 50,
            ease: "Power2",
            yoyo: true,
            onComplete: () => {
                this.oScene.add.tween({
                    targets: this.oScene.container_retry,
                    angle: 10,
                    duration: 50,
                    ease: "Power2",
                    yoyo: true,
                });
            }
        });
    }
}