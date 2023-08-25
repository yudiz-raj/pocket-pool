
// You can write more code here
let interactiveArea;
/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// body
		const body = this.add.container(0, 0);

		// background
		const background = this.add.image(960, 540, "Background");
		body.add(background);

		// container_border
		const container_border = this.add.container(0, 0);
		body.add(container_border);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(966, 224, 128, 128);
		rectangle_1.scaleX = 6;
		rectangle_1.scaleY = 0.5;
		rectangle_1.visible = false;
		rectangle_1.isFilled = true;
		container_border.add(rectangle_1);

		// rectangle
		const rectangle = this.add.rectangle(966, 834, 128, 128);
		rectangle.scaleX = 6;
		rectangle.scaleY = 0.5;
		rectangle.visible = false;
		rectangle.isFilled = true;
		container_border.add(rectangle);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(719, 548, 128, 128);
		rectangle_2.scaleX = 7;
		rectangle_2.scaleY = 0.5;
		rectangle_2.angle = 90;
		rectangle_2.visible = false;
		rectangle_2.isFilled = true;
		container_border.add(rectangle_2);

		// rectangle_3
		const rectangle_3 = this.add.rectangle(1210, 548, 128, 128);
		rectangle_3.scaleX = 7;
		rectangle_3.scaleY = 0.5;
		rectangle_3.angle = 90;
		rectangle_3.visible = false;
		rectangle_3.isFilled = true;
		container_border.add(rectangle_3);

		// container_levelTag
		const container_levelTag = this.add.container(0, 0);
		body.add(container_levelTag);

		// levelHeading
		const levelHeading = this.add.image(960, 209, "Level-Board");
		container_levelTag.add(levelHeading);

		// levelText
		const levelText = this.add.text(960, 139, "", {});
		levelText.setOrigin(0.5, 0.5);
		levelText.text = "LEVEL";
		levelText.setStyle({ "align": "center", "fontFamily": "Alfa Slab One", "fontSize": "30px", "shadow.offsetY":4,"shadow.blur":6,"shadow.stroke":true,"shadow.fill":true});
		container_levelTag.add(levelText);

		// levelNumber
		const levelNumber = this.add.text(960, 177, "", {});
		levelNumber.setOrigin(0.5, 0.5);
		levelNumber.text = "100";
		levelNumber.setStyle({ "align": "center", "fontFamily": "Alfa Slab One", "fontSize": "40px", "shadow.offsetY":4,"shadow.blur":6,"shadow.stroke":true,"shadow.fill":true});
		container_levelTag.add(levelNumber);

		// table
		const table = this.add.image(975, 540, "Table");
		table.scaleX = 0.7;
		table.scaleY = 0.7;
		body.add(table);

		// container_holes
		const container_holes = this.add.container(0, 0);
		body.add(container_holes);

		// container_retry
		const container_retry = this.add.container(960.5487956409165, 968.5408182439949);
		body.add(container_retry);

		// retryButton
		const retryButton = this.add.image(-0.5488124904029519, 4.459141747085141, "Button");
		container_retry.add(retryButton);

		// retryCount
		const retryCount = this.add.text(55, -4, "", {});
		retryCount.setOrigin(0.5, 0.5);
		retryCount.setStyle({ "align": "center", "fontFamily": "Alfa Slab One", "fontSize": "38px" });
		container_retry.add(retryCount);

		// retry_icon
		const retry_icon = this.add.image(-52, -4, "Retry-icon");
		retry_icon.scaleX = 0.8;
		retry_icon.scaleY = 0.8;
		container_retry.add(retry_icon);

		// multiply_icon
		const multiply_icon = this.add.image(6, -4, "multiply-icon");
		multiply_icon.scaleX = 0.5;
		multiply_icon.scaleY = 0.5;
		container_retry.add(multiply_icon);

		// loadingImage
		const loadingImage = this.add.image(-1373, 576, "loadingImage");
		loadingImage.scaleX = 2;
		loadingImage.scaleY = 2;
		loadingImage.alpha = 0.1;
		loadingImage.alphaTopLeft = 0.1;
		loadingImage.alphaTopRight = 0.1;
		loadingImage.alphaBottomLeft = 0.1;
		loadingImage.alphaBottomRight = 0.1;
		body.add(loadingImage);

		// arrow
		const arrow = this.add.image(768, 544, "arrow");
		arrow.scaleX = 1.5;
		arrow.scaleY = 1.5;
		arrow.setOrigin(0, 0.5);
		arrow.visible = false;
		body.add(arrow);

		this.container_border = container_border;
		this.levelNumber = levelNumber;
		this.table = table;
		this.container_holes = container_holes;
		this.container_retry = container_retry;
		this.retryButton = retryButton;
		this.retryCount = retryCount;
		this.arrow = arrow;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_border;
	/** @type {Phaser.GameObjects.Text} */
	levelNumber;
	/** @type {Phaser.GameObjects.Image} */
	table;
	/** @type {Phaser.GameObjects.Container} */
	container_holes;
	/** @type {Phaser.GameObjects.Container} */
	container_retry;
	/** @type {Phaser.GameObjects.Image} */
	retryButton;
	/** @type {Phaser.GameObjects.Text} */
	retryCount;
	/** @type {Phaser.GameObjects.Image} */
	arrow;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.oLevelManager = new LevelManager(this);
		this.oSoundManager = new SoundManager(this);
		this.oTweenManager = new TweenManager(this);

		// this.oLevelManager.levels();
		this.oLevelManager.levelHandler(nLevelCount-1);

		this.scroll();

		let cursors = this.input.keyboard.createCursorKeys();
		this.input.keyboard.on('keydown', this.handleKeyDown, this);

		this.levelNumber.setText(nLevelCount);
		this.retryCount.setText(nRetryCount);
		this.retryButton.setInteractive().on("pointerdown", () => {
			this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
			if (nRetryCount > 0) {
				this.oTweenManager.buttonAnimation(this.container_retry);
				nRetryCount -= 1;
				this.retryCount.setText(nRetryCount);
			}
		})

		this.oLevelManager.ballsGroup.children.entries.forEach((ball) => {
			ball.body.setSize(55, 55);
		})

		this.oLevelManager.holesGroup.children.entries.forEach((hole) => {
			this.physics.add.existing(hole, true);
			if (hole.texture.key == "whole_1") {
				hole.body.setSize(40, 70);
			}
			else {
				hole.body.setSize(70, 40);
			}
		})

		this.container_border.list.forEach((border) => {

			this.physics.add.existing(border, true);
			if (border.angle != 90) {
				border.body.setSize(700, 80);
				border.body.setOffset(0, -7);
			}
			else {
				border.body.setSize(80, 1000);
				border.body.setOffset(408, -450);
			}
			this.oLevelManager.borderGroup.add(border);

		})

		// IndexBall and border collider
		this.physics.add.collider(this.oLevelManager.indexBall, this.oLevelManager.borderGroup, () => {
			this.oLevelManager.indexBall.setScale(1, 1);
			this.oLevelManager.indexBall.setVelocity(0, 0);
			this.input.keyboard.enabled = true;
			interactiveArea.setInteractive();

		});

		// IndexBall and ball collider
		this.physics.add.collider(this.oLevelManager.indexBall, this.oLevelManager.ballsGroup, () => {
			this.oSoundManager.playSound(this.oSoundManager.ballHittingSound, false);
			this.oLevelManager.indexBall.setScale(1, 1);
			this.oLevelManager.indexBall.setVelocity(0, 0);
			this.input.keyboard.enabled = true;
			interactiveArea.setInteractive();

		});

		// Ball and hole collider
		this.physics.add.collider(this.oLevelManager.ballsGroup, this.oLevelManager.holesGroup, (number) => {
			this.oLevelManager.ballsGroup.children.entries.forEach((ball) => {
				if (ball.name == number.name) {
					ball.destroy();
				}
			})

			if (this.oLevelManager.ballsGroup.children.entries.length == 0) {
				nLevelCount += 1;
				this.levelHandler();
			}
		});

		//Ball and border collider
		this.physics.add.collider(this.oLevelManager.ballsGroup, this.oLevelManager.borderGroup);

		this.physics.add.collider(this.oLevelManager.indexBall, this.oLevelManager.holesGroup, () => {
			this.oLevelManager.indexBall.setScale(1, 1);
			this.oLevelManager.indexBall.destroy();

			this.levelUpText = this.add.text(540, 1149, "Try again").setFontFamily("GochiHand");
			this.levelUpText.setOrigin(0.5, 0.5).setShadowColor("black").setAngle(-10).setFontSize(100);

			this.tweens.add({
				targets: this.levelUpText,
				ease: "Back ease-out",
				scaleX: 1.2,
				scaleY: 1.2,
				duration: 700,
				onComplete: () => {
					this.tweens.add({
						targets: this.levelUpText,
						ease: "Back ease-in",
						scaleX: 1,
						scaleY: 1,
						duration: 700,
						onComplete: () => {
							this.scene.restart("Level");
						}
					})
				}

			})
		});

		let shape = this.make.graphics();
		shape.fillRect(760, 262, 420, 535);
		const mask = shape.createGeometryMask();
		this.arrow.setMask(mask);
	}

	levelHandler() {

		setTimeout(() => {

			if (nLevelCount == 7) {
				nLevelCount = 1;
				this.oSoundManager.playSound(this.oSoundManager.levelWinSound, false);
				this.scene.stop("Level");
				this.scene.start("LevelUp");
			}
			else {
				this.scene.restart("Level");
			}
		}, 300);
	}

	// Handle the keyboard key input
	handleKeyDown(event) {

		switch (event.code) {
			case 'ArrowUp':
				this.ballMovementDirection(-90, 0, -1500, 0.6, 1);
				break;

			case 'ArrowDown':
				this.ballMovementDirection(-270, 0, 1500, 0.6, 1);
				break;

			case 'ArrowLeft':
				this.ballMovementDirection(-180, -1500, 0, 1, 0.6);
				break;

			case 'ArrowRight':
				this.ballMovementDirection(0, 1500, 0, 1, 0.6);
				break;
		}
	}

	// Scroller for mobile user
	scroll() {
		interactiveArea = this.table;
		interactiveArea.setOrigin(0.5);
		interactiveArea.setInteractive();

		let dragStartX = 0;
		let dragStartY = 0;

		interactiveArea.on("pointerdown", (pointer) => {
			dragStartX = pointer.x;
			dragStartY = pointer.y;
		});

		interactiveArea.on("pointerup", (pointer) => {
			const dragEndX = pointer.x;
			const dragEndY = pointer.y;

			const dragThreshold = 50;

			const dragX = dragEndX - dragStartX;
			const dragY = dragEndY - dragStartY;

			if (Math.abs(dragX) > Math.abs(dragY) && Math.abs(dragX) > dragThreshold) {
				//Check Y Axis Collision and Continue Movement; Stop at Collision
				if (dragX > 0) {
					this.handleScroll("Right");
				} else {
					this.handleScroll("Left");
				}
			} else if (
				Math.abs(dragY) > Math.abs(dragX) &&
				Math.abs(dragY) > dragThreshold
			) {
				//Check X Axis Collision and Continue Movement; Stop at Collision
				if (dragY > 0) {
					this.handleScroll("Down");
				} else {
					this.handleScroll("Up");
				}
			}
		});
	}

	// handle scroll input 
	handleScroll(swipeSide) {
		switch (swipeSide) {
			case "Left":
				this.ballMovementDirection(-180, -1500, 0, 1, 0.6);
				interactiveArea.disableInteractive();
				break;

			case "Right":
				this.ballMovementDirection(0, 1500, 0, 1, 0.6);
				interactiveArea.disableInteractive();
				break;

			case "Up":
				this.ballMovementDirection(-90, 0, -1500, 0.6, 1);
				interactiveArea.disableInteractive();
				break;

			case "Down":
				this.ballMovementDirection(-270, 0, 1500, 0.6, 1);
				interactiveArea.disableInteractive();
				break;
		}
	}

	// set angle, velocity and scale for ball
	ballMovementDirection(angle, velocityX, velocityY, scaleX, scaleY) {
		this.input.keyboard.enabled = false;

		this.arrow.setPosition(this.oLevelManager.indexBall.x, this.oLevelManager.indexBall.y).setAngle(angle).setVisible(true);

		setTimeout(() => {
			this.arrow.setVisible(false);
			this.oLevelManager.indexBall.setVelocityX(velocityX);
			this.oLevelManager.indexBall.setVelocityY(velocityY);
			this.oLevelManager.indexBall.setScale(scaleX, scaleY);
		}, 200);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
