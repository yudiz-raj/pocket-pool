
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

		// table_2
		const table_2 = this.add.image(978, 540, "Table-2");
		body.add(table_2);

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
	init(win) {
		this.win = win.win;
	}
	create() {
		document.body.style.backgroundImage = 'url("assets/images/Background-3.png")';
		this.editorCreate();
		this.oSoundManager = new SoundManager(this);
		this.oTweenManager = new TweenManager(this);
		this.oSoundManager.stopSound(this.oSoundManager.backgroundMusic, false);
		if (this.win == false) {
			this.congratulations.setTexture("You-Lose").setX(980);
		}
		this.oTweenManager.winningAnimation(this.congratulations);
		this.replayButton.setInteractive();
		this.replayButton.on('pointerover', () => {
			this.input.setDefaultCursor('pointer');
			this.replayButton.setScale(1.05);
		});
		this.replayButton.on('pointerout', () => {
			this.input.setDefaultCursor('default');
			this.replayButton.setScale(1);
		});
		this.replayButton.setInteractive().on("pointerdown", () => {
			this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
			this.input.setDefaultCursor('default');
			this.replayButton.setScale(1);
			this.oTweenManager.popUpAnimation(this.container_replay, 80);
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
