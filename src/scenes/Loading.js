
// You can write more code here

/* START OF COMPILED CODE */

class Loading extends Phaser.Scene {

	constructor() {
		super("Loading");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// body
		const body = this.add.container(0, 0);

		// splash_screen
		const splash_screen = this.add.image(960, 540, "Splash-screen");
		body.add(splash_screen);

		// playButton
		const playButton = this.add.text(960, 1016, "", {});
		playButton.setOrigin(0.5, 0.5);
		playButton.text = "Tap to Play ";
		playButton.setStyle({ "align": "center", "fontFamily": "Alfa Slab One", "fontSize": "80px", "shadow.offsetX":15,"shadow.offsetY":15,"shadow.color": "#525252ff" });
		body.add(playButton);

		this.playButton = playButton;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	playButton;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();
		this.oSoundManager = new SoundManager(this);
		this.oTweenManager = new TweenManager(this);

		setInterval(() => {
			this.oTweenManager.popUpAnimation(this.playButton);
		}, 1000);

		this.input.on("pointerdown", () => {
			this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
			this.scene.stop("Loading");
			setTimeout(() => {
				this.scene.start("Level");
			}, 100);
		})

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
