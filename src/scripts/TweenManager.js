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
                if (target.name == "container_playButton") {
                    this.oScene.scene.stop("Loading");
                }
                if (target.name == "Try Again" || target.name == "container_retry") {
                    setTimeout(() => {
                        this.oScene.input.keyboard.enabled = true;
                        this.oScene.interactiveArea.setInteractive();
                        this.oScene.scene.restart("Level");
                    }, 1000);
                }
                if (target.name == "container_replay") {
                    this.oScene.scene.stop("LevelUp");
                    this.oScene.scene.start("Level");
                }
            }
        });
    }

    loadingAnimation() {
        this.oScene.add.tween({
            targets: this.oScene.stick,
            x: 1000,
            y: 280,
            duration: 1500,
            yoyo: true,
            repeat: -1
        })
    }

    starAnimation() {
        this.oScene.add.tween({
            targets: this.oScene.container_stars.list,
            scaleX: 1.5,
            scaleY: 1.5,
            duration: 500,
            yoyo: true,
            repeat: -1
        })
    }

    settingMaskAnimation() {
        this.oScene.setting_button.disableInteractive();
        if (this.oScene.container_setting.y == 145) {
            this.y = -18;
            this.angle = 360;
        }
        else {
            this.y = 145;
            this.angle = -360;
        }
        this.oScene.add.tween({
            targets: this.oScene.setting_button,
            angle: this.angle,
            ease: "Power2",
            duration: 100,
            onComplete: () => {
                this.oScene.setting_button.setInteractive();
            }

        });
        this.oScene.add.tween({
            targets: this.oScene.container_setting,
            y: this.y,
            ease: "Power2",
            duration: 300,
            onComplete: () => {
                this.oScene.info_button.setInteractive();
                this.oScene.sound_button.setInteractive();
            }
        });
    }

    winningAnimation(target) {
        if (target.texture.key == "You-Lose") {
            this.oScene.oSoundManager.playSound(this.oScene.oSoundManager.tryAgainSound, false);
            this.y = 515;
        }
        else {
            if (JSON.parse(localStorage.getItem("isAudioOn"))) {
                this.oScene.oSoundManager.playSound(this.oScene.oSoundManager.congratulationSound, false);
            }
            this.y = 440;
        }
        this.oScene.add.tween({
            targets: target,
            y: this.y,
            ease: "power2",
            duration: 400,
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
                    onComplete: () => {
                        this.oScene.container_retry.setAngle(0);
                    }
                });
            }
        });
    }

    retryButtonUpAnimation() {
        this.oScene.add.tween({
            targets: this.oScene.container_retry,
            y: 744,
            ease: "power2",
            duration: 600,
            onComplete: () => {
                this.oScene.input.keyboard.enabled = false;
                this.oScene.interactiveArea.disableInteractive();
            }
        });
    }
}