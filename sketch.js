var girl, girl_running, girl_collided;

var bgImg, bg;

var dinosaur, dinosaur_running, dinosaur_collided

var ground;

var obstaclesGroup, obstacle1, obstacle2, obstacle3;

var treasuresGroup, treasure1, treasure2;

var PLAY = 1;
var END = 0;
var gameState = PLAY;




function preload(){
girl_running = loadAnimation("running-girl.png", "running-girl(1).png",
 "running-girl(2).png", "running-girl(3).png", "running-girl(5).png") ;
girl_collided = loadImage("running-girl(4).png");

dinosaur_running = loadAnimation("dinosaur.png", "dinosaur(1).png", "dinosaur(2).png",
"dinosaur(4).png","dinosaur(5).png");
dinosaur_collided = loadImage("dinosaur(3).png");

groundImg = loadImage("groundImg(1).png");

bgImg = loadImage("bgImg(1).jpeg");

obstacle1 = loadImage("obstacle1.png");
obstacle2 = loadImage("obstacle2.png");
obstacle3 = loadImage("obstacle3.png");

treasure1 = loadImage("treasure1.png");
treasure2 = loadImage("treasure2.png");




}

function setup() {
 createCanvas(700,700);
 
 bg = createSprite(0, 350, 100, 100);
 bg.addImage("bg", bgImg);
 bg.x = bg.width/2;
 bg.scale = 1;
 
 
 
 girl = createSprite(300, 550, 20, 50);
 girl.addAnimation("running", girl_running);
 girl.addAnimation("collided", girl_collided);
 girl.scale = 0.5;

 dinosaur = createSprite(175, 450, 20, 50);
 dinosaur.addAnimation("running_dino", dinosaur_running);
 dinosaur.scale = 1.5;
 
 ground = createSprite(600, 675, 600, 20);
 ground.addImage("gr1", groundImg);
 ground.x = ground.width/2;
 ground.scale = 1;
//  ground.debug = true;
 


 
}

function draw() {

// console.log(girl.y);

ground.velocityX = -4;
  if(ground.x < 0){
       ground.x = ground.width/2
  }
 
 if(keyDown("space") && girl.y >= 520){
        girl.velocityY = -17;
    }
    girl.velocityY = girl.velocityY + 0.6;






bg.velocityX = -2;

if(bg.x < 0){
    bg.x = bg.width/2;
}





girl.collide(ground);
dinosaur.collide(ground);

spawnObstacles();

 drawSprites();
}

function spawnObstacles(){
    if (frameCount % 70 === 0){
      var obstacle = createSprite(700, 550, 20 ,30);
      obstacle.velocityX = -3;
    //   obstacle.debug = true;
      
       //generate random obstacles
       var rand = Math.round(random(1,2));
       //generates a random number 
       switch(rand) {
         case 1: obstacle.addImage(obstacle1);
                 break;
         case 2: obstacle.addImage(obstacle2);
                 break;
         default: break;
       }
      
       //assign scale and lifetime to the obstacle           
       obstacle.scale = 0.1;
       obstacle.lifetime = 300;
      
      //add each obstacle to the group
    //    obstaclesGroup.add(obstacle);
    }
   }
   

      

// function jumpingDino(){
//   if(frameCount % 70 === 0){
//     dinosaur.velocityY = -17;
//   }
//     dinosaur.velocityY = dinoaur.velocityY + 0.9;
// }













