
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

		// preload_screen
		this.add.image(960, 540, "table-1");

		// progress
		const progress = this.add.text(960, 988, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.text = "0%";
		progress.setStyle({ "fontFamily": "Alfa Slab One", "fontSize": "54px" });

		// stick
		const stick = this.add.image(940, 300, "stick");
		stick.scaleX = 1.8;
		stick.scaleY = 2.3;
		stick.angle = 163.5;

		// logo_2
		this.add.image(926, 277, "Logo-2");

		// white_Ball_1
		const white_Ball_1 = this.add.image(989, 311, "White-Ball");
		white_Ball_1.scaleX = 0.7;
		white_Ball_1.scaleY = 0.7;

		// progress (components)
		new PreloadText(progress);

		this.white_Ball_1 = white_Ball_1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	white_Ball_1;

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
