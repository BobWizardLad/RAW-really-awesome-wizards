const bootScene = new Phaser.Class({
  extends: Phaser.Scene,
  preload: function() {
    this.load.image('background', "background.png");
  },
  initialze: function() {

  },
  create: function() {
    this.add.image(600, 400, 'background');
  }
});

const config = {
  width: 1200,
  height: 800,
  type: Phaser.AUTO,
  audio: {
    disableWebAudio: true
  },
  physics: {
    default: 'arcade',
    arcade: {
      fps: 60,
      gravity: {y : 0},
    }
  },
  scene: bootScene
};

const game = new Phaser.Game(config);