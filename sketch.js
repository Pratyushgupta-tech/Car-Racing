var form,player,game;
var database;
var gameState = 0; 
var playerCount = 0;
var allPlayers;
var car1,car2,car3,car4,cars;

function preload(){

    track = loadImage("js/images/track.jpg");
    car1_img = loadImage("js/images/car1.png");
    car2_img = loadImage("js/images/car2.png");
    car3_img = loadImage("js/images/car3.png");
    car4_img = loadImage("js/images/car4.png");
    ground = loadImage("js/images/ground.png");
  }

function setup(){
    createCanvas(displayWidth-300,displayHeight-300);
 
    database = firebase.database()

game = new Game();
game.getState();
game.start();


}


function draw(){
    if(playerCount === 4){
  
      game.update(1);
  
    }
  
    if(gameState === 1){
  
      clear();
      game.play();
  
    }
  
    if(gameState === 2){
      game.end();
    }
  
  }
  
