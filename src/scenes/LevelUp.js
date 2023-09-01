
// You can write more code here

/* START OF COMPILED CODE */

class LevelUp extends Phaser.Scene {

	constructor() {
		super("LevelUp");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// body
		const body = this.add.container(0, 0);

		// winning_bg
		const winning_bg = this.add.image(960, 540, "winning-bg");
		body.add(winning_bg);

		// container_replay
		const container_replay = this.add.container(962, 991);
		container_replay.name = "container_replay";
		body.add(container_replay);

		// replayButton
		const replayButton = this.add.image(-1.94616679474359, 7.980522768212495, "Button");
		container_replay.add(replayButton);

		// retryText
		const retryText = this.add.text(-1.94616679474359, -0.019477231787504934, "", {});
		retryText.setOrigin(0.5, 0.5);
		retryText.text = "REPLAY";
		retryText.setStyle({ "align": "center", "fontFamily": "Alfa Slab One", "fontSize": "38px" });
		container_replay.add(retryText);

		// container_winningPopUp
		const container_winningPopUp = this.add.container(955, 598);
		container_winningPopUp.scaleX = 3;
		container_winningPopUp.scaleY = 3;
		body.add(container_winningPopUp);

		// congratulation_text
		const congratulation_text = this.add.image(9.092519290992072, -347.3582023046822, "Congratulation-text");
		congratulation_text.scaleX = 1.5;
		congratulation_text.scaleY = 1.5;
		container_winningPopUp.add(congratulation_text);

		// you_won_txt
		const you_won_txt = this.add.image(16.092519290992072, -63.35820230468221, "you-won");
		container_winningPopUp.add(you_won_txt);

		this.replayButton = replayButton;
		this.container_replay = container_replay;
		this.container_winningPopUp = container_winningPopUp;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	replayButton;
	/** @type {Phaser.GameObjects.Container} */
	container_replay;
	/** @type {Phaser.GameObjects.Container} */
	container_winningPopUp;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();
		this.oSoundManager = new SoundManager(this);
		this.oTweenManager = new TweenManager(this);

		this.confetti();
		this.oTweenManager.winningAnimation(this.container_winningPopUp, 1);
		this.replayButton.setInteractive().on("pointerdown", () => {
			this.oTweenManager.popUpAnimation(this.container_replay, 80);
			nRetryCount = 3;
		})
	}

	confetti() {
		const count = 100,
			defaults = {
				origin: { y: 0.7 },
			};

		function fire(particleRatio, opts) {
			confetti(
				Object.assign({}, defaults, opts, {
					particleCount: Math.floor(count * particleRatio),
				})
			);
		}

		fire(0.5, {
			spread: 30,
			startVelocity: 55,
		});

		fire(0.4, {
			spread: 45,
		});

		fire(0.7, {
			spread: 55,
			decay: 0.91,
			scalar: 0.8,
		});

		fire(0.2, {
			spread: 65,
			startVelocity: 25,
			decay: 0.92,
			scalar: 1.2,
		});

		fire(0.2, {
			spread: 65,
			startVelocity: 45,
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
