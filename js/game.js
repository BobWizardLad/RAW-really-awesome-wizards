const bootScene = new Phaser.Class({
  extends: Phaser.Scene,
  preload: function() {
    this.load.image('background', "background.png");
    this.load.image('redwiz_standing', "red_wiz01.png")
  },
  initialze: function() {
    Phaser.Scene.call(this, { key: 'battleScene' });

  },
  create: function() {
    

    // Load player properties
    this.MOVESPEED = 160;
    this.player = this.physics.add.sprite(200, 500, 'redwiz_standing');
    this.player.setCollideWorldBounds(true);

    // Load controllers
    this.cursors = this.input.keyboard.createCursorKeys();

    // Call the UI
    this.scene.launch('uiScene')
  },
  update: function() {

    this.player.body.setVelocity(0);
    
    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-this.MOVESPEED);
    }
    else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(this.MOVESPEED);
    }

    if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-this.MOVESPEED);
    }
    else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(this.MOVESPEED);
    }

  }
});

const battleScene = new Phaser.Class({
  extends: Phaser.Scene,
  preload: function() {},
  initialze: function() {},
  create: function() {
    // Load static scene images
    this.add.image(600, 400, 'background');
  },
  update: function() {}
});

const uiScene = new Phaser.Class({
  extends: Phaser.Scene,
  initialze: function() {},
  preload: function() {},
  create: function() {
        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);        
        this.graphics.strokeRect(700, 600, 450, 150);
        this.graphics.fillRect(700, 600, 450, 150);
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
  //scene: bootScene
  scene: [bootScene, uiScene]
};

const game = new Phaser.Game(config);