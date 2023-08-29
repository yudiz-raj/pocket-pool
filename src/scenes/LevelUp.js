
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

		// party_popper
		const party_popper = this.add.image(961.277587890625, 557.9254150390625, "party-popper");
		party_popper.scaleX = 0;
		party_popper.scaleY = 0;
		body.add(party_popper);

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
		this.party_popper = party_popper;
		this.container_winningPopUp = container_winningPopUp;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	replayButton;
	/** @type {Phaser.GameObjects.Container} */
	container_replay;
	/** @type {Phaser.GameObjects.Image} */
	party_popper;
	/** @type {Phaser.GameObjects.Container} */
	container_winningPopUp;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();
		this.oSoundManager = new SoundManager(this);
		this.oTweenManager = new TweenManager(this);

		this.oTweenManager.winningAnimation(this.party_popper, 1.5);
		this.oTweenManager.winningAnimation(this.container_winningPopUp, 1);
		this.replayButton.setInteractive().on("pointerdown", () => {
			this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
			this.oTweenManager.buttonAnimation(this.container_replay);
			nRetryCount = 3;
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
