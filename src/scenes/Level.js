// You can write more code here
let interactiveArea;
let nMove = 0;
let nScore = 0;
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
		this.retryButton = retryButton;
		this.retryCount = retryCount;
		this.container_retry = container_retry;
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
	/** @type {Phaser.GameObjects.Image} */
	retryButton;
	/** @type {Phaser.GameObjects.Text} */
	retryCount;
	/** @type {Phaser.GameObjects.Container} */
	container_retry;
	/** @type {Phaser.GameObjects.Image} */
	arrow;

	/* START-USER-CODE */

  // Write your code here

  create() {
    this.editorCreate();

    this.oLevelManager = new LevelManager(this);
    this.oSoundManager = new SoundManager(this);
    this.oTweenManager = new TweenManager(this);

    this.ballsGroup = this.add.group();
    this.holesGroup = this.add.group();
    this.borderGroup = this.add.group();

    this.levelNumber.setText(nLevelCount);
    this.retryCount.setText(nRetryCount);

    this.levelSelecter();
    this.input.keyboard.createCursorKeys();
    this.input.keyboard.on("keydown", this.handleKeyDown, this);
    this.scroll();

    this.retryButton.on("pointerdown", () => {
      if (nRetryCount > 0) {
        nMove = 0;
        nScore = 0;
        this.oTweenManager.buttonAnimation(this.container_retry);
        nRetryCount -= 1;
        this.retryCount.setText(nRetryCount);
      }
    });

    this.ballsGroup.children.entries.forEach((ball) => {
      ball.body.setSize(45, 45);
    });

    this.holesGroup.children.entries.forEach((hole) => {
      this.physics.add.existing(hole, true);
      if (hole.texture.key == "whole_1") {
        hole.body.setSize(40, 60);
      } else {
        hole.body.setSize(60, 40);
      }
    });

    this.container_border.list.forEach((border) => {
      this.physics.add.existing(border, true);
      if (border.angle != 90) {
        border.body.setSize(700, 80);
        border.body.setOffset(0, -7);
      } else {
        border.body.setSize(80, 1000);
        border.body.setOffset(408, -450);
      }
      this.borderGroup.add(border);
    });

    // IndexBall and border collider
    this.physics.add.collider(this.indexBall, this.borderGroup, () => {
      this.indexBall.setScale(1, 1);
      this.indexBall.setVelocity(0, 0);
      this.input.keyboard.enabled = true;
      interactiveArea.setInteractive();
    });

    // IndexBall and ball collider
    this.physics.add.collider(
      this.indexBall,
      this.ballsGroup,
      (indexBall, ball) => {
        this.indexBall.setVelocity(0, 0);
        this.indexBall.setScale(1, 1);
        this.input.keyboard.enabled = true;
        interactiveArea.setInteractive();
      }
    );
    // Ball and ball collider
    this.physics.add.collider(this.ballsGroup, this.ballsGroup);
    // Ball and hole collider
    this.physics.add.collider(this.ballsGroup, this.holesGroup, (number) => {
      this.ballsGroup.children.entries.forEach((ball) => {
        if (ball.name == number.name) {
          ball.destroy();
          nScore++;
          nMove = nScore;
        }
      });
      if (this.ballsGroup.children.entries.length == 0) {
        nLevelCount += 1;
        this.levelHandler();
      }
    });
    //Ball and border collider
    this.physics.add.collider(this.ballsGroup, this.borderGroup);
    //IndexBall and holes collider
    this.physics.add.collider(this.indexBall, this.holesGroup, () => {
      nMove = 0;
      nScore = 0;
      this.indexBall.setScale(1, 1);
      this.indexBall.destroy();
      this.tryAgainImage = this.add
        .image(971, 500, "Try-again")
        .setScale(0.8, 0.8);
      this.oTweenManager.popUpAnimation(this.tryAgainImage);
    });

    let shape = this.make.graphics();
    shape.fillRect(760, 262, 420, 535);
    const mask = shape.createGeometryMask();
    this.arrow.setMask(mask);
  }

  levelHandler() {
    nMove = 0;
    nScore = 0;
    setTimeout(() => {
      if (nLevelCount == 11) {
        nLevelCount = 1;
        this.scene.stop("Level");
        this.scene.start("LevelUp");
      } else {
        this.scene.restart("Level");
      }
    }, 300);
  }

  levelSelecter() {
    let numberOfBalls = Object.keys(this.oLevelManager.aLevel[nLevelCount - 1].oBalls).length;
    let numberOfHoles = Object.keys(this.oLevelManager.aLevel[nLevelCount - 1].oHoles).length;
    this.ballsData = this.oLevelManager.aLevel[nLevelCount - 1].oBalls;
    this.holesData = this.oLevelManager.aLevel[nLevelCount - 1].oHoles;

    for (let i = 0; i < numberOfBalls; i++) {
      if (this.ballsData[`ball_${i}`]) {
        this.ball = this.physics.add.sprite(this.ballsData[`ball_${i}`].x,this.ballsData[`ball_${i}`].y,`ball_${i}`).setName(i - 1);
        this.ballsGroup.add(this.ball);
      } else {
        this.indexBall = this.physics.add.sprite(this.ballsData.indexBall.x,this.ballsData.indexBall.y,"W-Ball");
        this.indexBall.body.setSize(50, 50);
      }
    }

    for (let i = 0; i < numberOfHoles; i++) {
      this.hole = this.add.image(
        this.holesData[`whole_${i + 1}`].x,
        this.holesData[`whole_${i + 1}`].y,
        this.holesData[`whole_${i + 1}`].texture
      );
      if (this.holesData[`whole_${i + 1}`].texture == "whole_1") {
        this.hole.setFlipY(this.holesData[`whole_${i + 1}`].flip);
      } else {
        this.hole.setFlipX(this.holesData[`whole_${i + 1}`].flip);
      }
      this.holesGroup.add(this.hole);
      this.container_holes.add(this.hole);
    }
  }

  // Handle the keyboard key input
  handleKeyDown(event) {
    switch (event.code) {
      case "ArrowUp":
        this.ballMovementDirection(-90, 0, -1500, 0.6, 1);
        break;
      case "ArrowDown":
        this.ballMovementDirection(-270, 0, 1500, 0.6, 1);
        break;
      case "ArrowLeft":
        this.ballMovementDirection(-180, -1500, 0, 1, 0.6);
        break;
      case "ArrowRight":
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

      if (
        Math.abs(dragX) > Math.abs(dragY) &&
        Math.abs(dragX) > dragThreshold
      ) {
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
    nMove++;
    this.input.keyboard.enabled = false;
    this.retryButton.setInteractive();

    this.stick = this.add.image(this.indexBall.x, this.indexBall.y, "stick");
		this.stick.setOrigin(0.5, 1);
    this.arrow.setPosition(this.indexBall.x, this.indexBall.y).setAngle(angle).setVisible(true);
    this.stick.setPosition(this.indexBall.x, this.indexBall.y).setAngle(angle - 90).setVisible(true).setDepth(100);

    if(nMove > nScore + 3){
      this.oTweenManager.shakeAnimation();
    }  

    setTimeout(() => {
      this.arrow.setVisible(false);
      this.indexBall.setVelocityX(velocityX);
      this.indexBall.setVelocityY(velocityY);
      this.indexBall.setScale(scaleX, scaleY);
    }, 100);
    setTimeout(() => {
      this.stick.setVisible(false);
      switch (angle) {
        case -90:
          this.indexBall.setPosition(this.indexBall.x, this.indexBall.y + 14);
          break;
        case -270:
          this.indexBall.setPosition(this.indexBall.x, this.indexBall.y - 14);
          break;
        case -180:
          this.indexBall.setPosition(this.indexBall.x + 14, this.indexBall.y);
          break;
        case 0:
          this.indexBall.setPosition(this.indexBall.x - 14, this.indexBall.y);
      }
    }, 300);
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */ 
// You can write more code here
