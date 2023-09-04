
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
		const container_replay = this.add.container(960, 991);
		container_replay.name = "container_replay";
		body.add(container_replay);

		// replayButton
		const replayButton = this.add.image(22, -11, "Play-Again");
		container_replay.add(replayButton);

		// congratulations
		const congratulations = this.add.image(960, -187, "Congratulations");
		body.add(congratulations);

		this.replayButton = replayButton;
		this.container_replay = container_replay;
		this.congratulations = congratulations;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	replayButton;
	/** @type {Phaser.GameObjects.Container} */
	container_replay;
	/** @type {Phaser.GameObjects.Image} */
	congratulations;

	/* START-USER-CODE */

	// Write your code here
	create() {
		this.editorCreate();
		this.oSoundManager = new SoundManager(this);
		this.oTweenManager = new TweenManager(this);

		this.oTweenManager.winningAnimation(this.congratulations);
		this.replayButton.setInteractive().on("pointerdown", () => {
			this.oTweenManager.popUpAnimation(this.container_replay, 80);
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
