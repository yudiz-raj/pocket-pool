let aLevel = [];
class LevelManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.ballsGroup = this.oScene.add.group();
        this.holesGroup = this.oScene.add.group();
        this.borderGroup = this.oScene.add.group();
        aLevel = [
            {

                oBalls: {

                    indexBall: {
                        x: 966,
                        y: 662,
                    },
                    ball_1: {
                        x: 966,
                        y: 449,
                    },
                    ball_2: {
                        x: 850,
                        y: 502,
                    },

                },
                oHoles: {
                    whole_1: {
                        x: 966,
                        y: 239,
                        texture: "whole_1",
                        flip: true
                    },
                    whole_2: {
                        x: 734,
                        y: 502,
                        texture: "whole_2",
                        flip: true
                    }
                }
            },
            {
                oBalls: {

                    indexBall: {
                        x: 966,
                        y: 662,
                    },
                    ball_1: {
                        x: 966,
                        y: 449,
                    },
                    ball_2: {
                        x: 850,
                        y: 502,
                    },
                    ball_3: {
                        x: 907,
                        y: 720,
                    },

                },
                oHoles: {
                    whole_1: {
                        x: 966,
                        y: 239,
                        texture: "whole_1",
                        flip: true
                    },
                    whole_2: {
                        x: 734,
                        y: 502,
                        texture: "whole_2",
                        flip: true
                    },
                    whole_3: {
                        x: 907,
                        y: 820,
                        texture: "whole_1",
                        flip: false
                    }
                }
            },
            {
                oBalls: {

                    indexBall: {
                        x: 849,
                        y: 715,
                    },
                    ball_1: {
                        x: 849,
                        y: 502,
                    },
                    ball_2: {
                        x: 1083,
                        y: 556,
                    },
                    ball_3: {
                        x: 1025,
                        y: 715,
                    },
                    ball_4: {
                        x: 907,
                        y: 663,
                    },

                },
                oHoles: {
                    whole_1: {
                        x: 849,
                        y: 239,
                        texture: "whole_1",
                        flip: true
                    },
                    whole_2: {
                        x: 1200,
                        y: 556,
                        texture: "whole_2",
                        flip: false
                    },
                    whole_3: {
                        x: 1025,
                        y: 820,
                        texture: "whole_1",
                        flip: false
                    },
                    whole_4: {
                        x: 734,
                        y: 663,
                        texture: "whole_2",
                        flip: true
                    },
                    whole_5: {
                        x: 1200,
                        y: 715,
                        texture: "whole_2",
                        flip: false
                    },
                }
            },
            {
                oBalls: {

                    indexBall: {
                        x: 966,
                        y: 555,
                    },
                    ball_1: {
                        x: 966,
                        y: 394,
                    },
                    ball_2: {
                        x: 1083,
                        y: 449,
                    },
                    ball_3: {
                        x: 1025,
                        y: 715,
                    },
                    ball_4: {
                        x: 908,
                        y: 663,
                    },
                    ball_5: {
                        x: 849,
                        y: 449,
                    },
                },
                oHoles: {
                    whole_1: {
                        x: 966,
                        y: 239,
                        texture: "whole_1",
                        flip: true
                    },
                    whole_2: {
                        x: 1200,
                        y: 449,
                        texture: "whole_2",
                        flip: false
                    },
                    whole_3: {
                        x: 1025,
                        y: 820,
                        texture: "whole_1",
                        flip: false
                    },
                    whole_4: {
                        x: 734,
                        y: 663,
                        texture: "whole_2",
                        flip: true
                    },
                    whole_5: {
                        x: 734,
                        y: 449,
                        texture: "whole_2",
                        flip: true
                    },
                    whole_6: {
                        x: 908,
                        y: 820,
                        texture: "whole_1",
                        flip: false
                    },
                    whole_7: {
                        x: 1200,
                        y: 715,
                        texture: "whole_2",
                        flip: false
                    },
                }
            },
            {
                oBalls: {

                    indexBall: {
                        x: 966,
                        y: 502,
                    },
                    ball_1: {
                        x: 1083,
                        y: 609,
                    },
                    ball_2: {
                        x: 908,
                        y: 663,
                    },
                    ball_3: {
                        x: 966,
                        y: 394,
                    },
                    ball_4: {
                        x: 1025,
                        y: 502,
                    },
                    ball_5: {
                        x: 849,
                        y: 449,
                    },
                    ball_6: {
                        x: 1025,
                        y: 715,
                    },
                },
                oHoles: {
                    whole_1: {
                        x: 1200,
                        y: 609,
                        texture: "whole_2",
                        flip: false
                    },
                    whole_2: {
                        x: 908,
                        y: 820,
                        texture: "whole_1",
                        flip: false
                    },
                    whole_3: {
                        x: 966,
                        y: 239,
                        texture: "whole_1",
                        flip: true
                    },
                    whole_4: {
                        x: 1200,
                        y: 502,
                        texture: "whole_2",
                        flip: false
                    },
                    whole_5: {
                        x: 734,
                        y: 449,
                        texture: "whole_2",
                        flip: true
                    },
                    whole_6: {
                        x: 1025,
                        y: 820,
                        texture: "whole_1",
                        flip: false
                    },
                    whole_7: {
                        x: 734,
                        y: 663,
                        texture: "whole_2",
                        flip: true
                    },
                }
            },
            {
                oBalls: {

                    indexBall: {
                        x: 965,
                        y: 555,
                    },
                    ball_1: {
                        x: 1025,
                        y: 342,
                    },
                    ball_2: {
                        x: 908,
                        y: 395,
                    },
                    ball_3: {
                        x: 965,
                        y: 449,
                    },
                    ball_4: {
                        x: 1025,
                        y: 555,
                    },
                    ball_5: {
                        x: 849,
                        y: 555,
                    },
                    ball_6: {
                        x: 1082,
                        y: 662,
                    },
                    ball_7: {
                        x: 908,
                        y: 716,
                    },
                },
                oHoles: {
                    whole_1: {
                        x: 1025,
                        y: 239,
                        texture: "whole_1",
                        flip: true
                    },
                    whole_2: {
                        x: 908,
                        y: 239,
                        texture: "whole_1",
                        flip: true
                    },
                    whole_3: {
                        x: 1200,
                        y: 449,
                        texture: "whole_2",
                        flip: false
                    },
                    whole_4: {
                        x: 1200,
                        y: 555,
                        texture: "whole_2",
                        flip: false
                    },
                    whole_5: {
                        x: 734,
                        y: 555,
                        texture: "whole_2",
                        flip: true
                    },
                    whole_6: {
                        x: 1200,
                        y: 662,
                        texture: "whole_2",
                        flip: false
                    },
                    whole_7: {
                        x: 908,
                        y: 820,
                        texture: "whole_1",
                        flip: false
                    },
                    whole_8: {
                        x: 966,
                        y: 239,
                        texture: "whole_1",
                        flip: true
                    },
                }
            }
        ]
    }

    levelHandler(levelNumber) {
        let numberOfBalls = Object.keys(aLevel[levelNumber].oBalls).length;
        let numberOfHoles = Object.keys(aLevel[levelNumber].oHoles).length;

        for (let i = 0; i < numberOfBalls; i++) {
            if (aLevel[levelNumber].oBalls[`ball_${i}`]) {
                this.ball = this.oScene.physics.add.sprite(aLevel[levelNumber].oBalls[`ball_${i}`].x, aLevel[levelNumber].oBalls[`ball_${i}`].y, `ball_${i}`).setName(i - 1);
                this.ballsGroup.add(this.ball);
            } else {
                this.indexBall = this.oScene.physics.add.sprite(aLevel[levelNumber].oBalls.indexBall.x, aLevel[levelNumber].oBalls.indexBall.y, "W-Ball");
                this.indexBall.body.setSize(55, 55);
            }
        }

        for (let i = 0; i < numberOfHoles; i++) {
            this.hole = this.oScene.add.image(aLevel[levelNumber].oHoles[`whole_${i + 1}`].x, aLevel[levelNumber].oHoles[`whole_${i + 1}`].y, aLevel[levelNumber].oHoles[`whole_${i + 1}`].texture);
            if (aLevel[levelNumber].oHoles[`whole_${i + 1}`].texture == "whole_1") {
                this.hole.setFlipY(aLevel[levelNumber].oHoles[`whole_${i + 1}`].flip);
            }
            else {
                this.hole.setFlipX(aLevel[levelNumber].oHoles[`whole_${i + 1}`].flip);

            }
            this.holesGroup.add(this.hole);
            this.oScene.container_holes.add(this.hole);
        }
    }
}
