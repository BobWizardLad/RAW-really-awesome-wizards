// Scenes are classes, and as such will have an Extends property
// to find the parent. Scenes will have an initialize property that
// will 'call' the scene (put it on the screen). 
// 
// The Scene will also call a preload function that will run all
// code in its body before the initialize. create will be called
// once the scene is initialized.
//
// preload --> initialize --> create
//

// Scene object that will be called when the game begins
var BootScene = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function BootScene () {
        Phaser.Scene.call(this, { key: 'BootScene' });
    },
    preload: function () {
        // Load resources
    },
    create: function () {
        this.scene.start('BattleScene');
    }
});

// Scenes like this will make up the game's structure, think of them
// as game modes
var WorldScene = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function WorldScene () {
        Phaser.Scene.call(this, {key: 'WorldScene'});
    },
    preload: function () {},
    create: function () {
        // Create the world
    }
});


// This struct will be used to build a game, see below
var config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: 320,
    height: 240,
    zoom: 2,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0}
        }
    },
    scene: {
        BootScene,
        WorldScene
    }

}

// Phaser.Game is a class that contains and manages ALL of the 
// information needed to create, run, and play a game. It is
// built using a config, such as the one above
var game = new Phaser.Game(config);