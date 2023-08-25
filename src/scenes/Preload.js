
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(960, 540, 1080, 1920);
		rectangle_1.angle = 90;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 5101402;

		// gameLogo
		const gameLogo = this.add.image(960, 355, "gameLogo");
		gameLogo.scaleX = 2;
		gameLogo.scaleY = 2;

		// progress
		const progress = this.add.text(960, 885, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.text = "0%";
		progress.setStyle({ "fontSize": "54px" });

		// progress (components)
		new PreloadText(progress);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Loading"));
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
