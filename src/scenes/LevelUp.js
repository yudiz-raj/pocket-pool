
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

		// party_popper
		const party_popper = this.add.image(957, 527, "party-popper");
		party_popper.scaleX = 1.5;
		party_popper.scaleY = 1.5;
		body.add(party_popper);

		// congratulation_text
		const congratulation_text = this.add.image(964, 193, "Congratulation-text");
		congratulation_text.scaleX = 1.5;
		congratulation_text.scaleY = 1.5;
		body.add(congratulation_text);

		// you_won_txt
		const you_won_txt = this.add.image(971, 477, "you-won");
		body.add(you_won_txt);

		// container_replay
		const container_replay = this.add.container(961.9461667947436, 965.0194772317875);
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

		this.container_replay = container_replay;
		this.replayButton = replayButton;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_replay;
	/** @type {Phaser.GameObjects.Image} */
	replayButton;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.oSoundManager = new SoundManager(this);
		this.oTweenManager = new TweenManager(this);

		this.replayButton.setInteractive().on("pointerdown", () => {
			this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
			this.oTweenManager.buttonAnimation(this.container_replay);
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
