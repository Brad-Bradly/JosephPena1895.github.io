var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:700,y:285},
                {type: 'sawblade',x:900,y:groundY},
                {type: 'sawblade',x:1100,y:groundY},
                {type: 'box',x:500,y:groundY}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            var obstacleImage = draw.bitmap('img/sawblade.png');
            myObstacle.addChild(obstacleImage);   
            game.addGameItem(myObstacle); 
            myObstacle.x = x;
            myObstacle.y = y;
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        }

        function createBox(x, y) {
            var hitZoneSize = 30;
            var damageFromObstacle = 5;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            var obstacleImage = draw.bitmap('img/box.png');
            obstacleImage.scaleX = 0.25;
            obstacleImage.scaleY = 0.25;
            myObstacle.addChild(obstacleImage);   
            game.addGameItem(myObstacle); 
            myObstacle.x = x;
            myObstacle.y = y;
            obstacleImage.x = -33;
            obstacleImage.y = -35;
        }
        
        for (var i=0; i < levelData.gameItems.length; i++) {
            var gameItem = levelData.gameItems[i];            
            
            if ( 'sawblade' === gameItem.type){
                createSawBlade(gameItem.x, gameItem.y)
            }
            else if ( 'box' === gameItem.type) {
                createBox(gameItem.x, gameItem.y)
            }
        }
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}