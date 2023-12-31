
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
		const splash_screen = this.add.image(960, 540, "table-1");
		body.add(splash_screen);

		// container_playButton
		const container_playButton = this.add.container(960, 988);
		container_playButton.name = "container_playButton";
		body.add(container_playButton);

		// playButton
		const playButton = this.add.image(0, 0, "Start");
		playButton.name = "playButton";
		container_playButton.add(playButton);

		// stick
		const stick = this.add.image(940, 300, "stick");
		stick.scaleX = 1.8;
		stick.scaleY = 2.3;
		stick.angle = 163.5;
		body.add(stick);

		// logo_2
		const logo_2 = this.add.image(926, 277, "Logo-3");
		body.add(logo_2);

		// white_Ball
		const white_Ball = this.add.image(989, 311, "White-Ball");
		white_Ball.scaleX = 0.7;
		white_Ball.scaleY = 0.7;
		body.add(white_Ball);

		// container_stars
		const container_stars = this.add.container(0, 0);
		body.add(container_stars);

		// shine
		const shine = this.add.image(727, 189, "Shine");
		container_stars.add(shine);

		// shine_1
		const shine_1 = this.add.image(1096, 359, "Shine");
		container_stars.add(shine_1);

		this.playButton = playButton;
		this.container_playButton = container_playButton;
		this.stick = stick;
		this.white_Ball = white_Ball;
		this.container_stars = container_stars;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	playButton;
	/** @type {Phaser.GameObjects.Container} */
	container_playButton;
	/** @type {Phaser.GameObjects.Image} */
	stick;
	/** @type {Phaser.GameObjects.Image} */
	white_Ball;
	/** @type {Phaser.GameObjects.Container} */
	container_stars;

	/* START-USER-CODE */

	// Write your code here
	setAudio() {
		const isAudioOn = (flag) => {
			this.oSoundManager.playSound(this.oSoundManager.backgroundMusic, true);
			localStorage.setItem("isAudioOn", flag);
			this.sound.mute = !flag;
		}
		isAudioOn(JSON.parse(localStorage.getItem("isAudioOn")));
	}

	create() {
		this.editorCreate();
		this.oSoundManager = new SoundManager(this);
		this.oTweenManager = new TweenManager(this);
		this.setAudio();
		this.oTweenManager.loadingAnimation();
		this.oTweenManager.starAnimation();
		this.playButton.setInteractive();
		this.playButton.on('pointerover', () => {
			this.input.setDefaultCursor('pointer');
			this.playButton.setScale(1.05);
		});
		this.playButton.on('pointerout', () => {
			this.input.setDefaultCursor('default');
			this.playButton.setScale(1);
		});
		this.playButton.on("pointerdown", () => {
			this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
			this.input.setDefaultCursor('default');
			this.playButton.setScale(1);
			this.oTweenManager.popUpAnimation(this.container_playButton, 80);
			setTimeout(() => {
				this.scene.stop("Loading");
				this.scene.start("Level");
			}, 100);
		})
	}

	update() {
		this.white_Ball.angle += 2;
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
