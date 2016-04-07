window.onload = function() {
    // You might want to start with a template that uses GameStates:
    //     https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic
    
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    "use strict";
    
    var game = new Phaser.Game( 300, 800, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    var highway;
    var player;
    var cursors;

    function preload() {
        // Load background image
        game.load.image( 'road', 'assets/3lanehighway.png' );
        game.load.image( 'car', 'assets/Car.png');
    }
    
    function create() {
    	game.physics.startSystem(Phaser.Physics.ARCADE);
	// Create the highway
        highway = game.add.tileSprite( 0, 0, 300, 800, 'road');
        player = game.add.sprite(100, 500, 'car');
        //player.scale.set(0.5, 0.5);
        player.anchor.setTo(0.5, 0.5);
        game.physics.arcade.enable(player);
        cursors = game.input.keyboard.createCursorKeys();
    }
    
    function update() {
        // Scrolling Highway
	highway.tilePosition.y += 10;
	
	player.body.velocity.setTo(0,0);
	
	if(cursors.left.isDown) {
		player.body.velocity.x -= 80;
	}
	else if(cursors.right.isDown) {
		player.body.velocity.x += 80;
	}
	else if(cursors.up.isDown) {
		player.body.velocity.y -= 80;
	}
	else if(cursors.down.isDown) {
		player.body.velocity.y += 80;
	}
	else {
		player.body.velocity.y += 10;
	}
    }
};
