
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

		// rectangle_1
		const rectangle_1 = this.add.rectangle(960, 540, 1080, 1920);
		rectangle_1.angle = 90;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 5101402;
		body.add(rectangle_1);

		// heading
		const heading = this.add.text(960, 277, "", {});
		heading.setOrigin(0.5, 0.5);
		heading.text = "Pool";
		heading.setStyle({ "align": "center", "fontFamily": "GochiHand", "fontSize": "300px", "shadow.offsetX":15,"shadow.offsetY":15,"shadow.color": "#525252ff", "shadow.stroke":true,"shadow.fill":true});
		body.add(heading);

		// playButton
		const playButton = this.add.text(960, 1000, "", {});
		playButton.setOrigin(0.5, 0.5);
		playButton.text = "Tap to Play ";
		playButton.setStyle({ "align": "center", "fontFamily": "Alfa Slab One", "fontSize": "80px", "shadow.offsetX":15,"shadow.offsetY":15,"shadow.color": "#525252ff" });
		body.add(playButton);

		// container_logo
		const container_logo = this.add.container(0, 0);
		body.add(container_logo);

		// logoBall
		const logoBall = this.add.image(964, 713, "logoBall");
		logoBall.scaleX = 1.5;
		logoBall.scaleY = 1.5;
		container_logo.add(logoBall);

		// logoStick
		const logoStick = this.add.image(1002, 645, "logoStick");
		logoStick.scaleX = 3;
		logoStick.scaleY = 3;
		logoStick.angle = 10;
		container_logo.add(logoStick);

		// ellipse_1
		const ellipse_1 = this.add.ellipse(944, 982, 120, 128);
		ellipse_1.scaleX = 0.5;
		ellipse_1.scaleY = 0.2;
		ellipse_1.angle = 10;
		ellipse_1.isFilled = true;
		ellipse_1.fillColor = 16047483;
		ellipse_1.isStroked = true;
		ellipse_1.strokeColor = 4932410;
		ellipse_1.lineWidth = 20;
		container_logo.add(ellipse_1);

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

		this.input.on("pointerdown", ()=>{
			this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
			this.scene.stop("Loading");
			this.scene.start("Level");
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
