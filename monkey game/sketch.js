
var monkey , monkey_running,ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0;

function preload(){
  
  monkeyImage = loadImage("sprite_0.png");
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)
  
  monkey = createSprite(200,200);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1
  
  bananasGroup = createGroup();
  
  obstaclesGroup = createGroup();

}


function draw() {
background("white");
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  
  survivalTime = Math.ceil(round(frameCount/frameRate()))
  text("Survival Time: " + survivalTime,100,50);
  
  if (keyDown("space")) {
    monkey.velocityY = -15;
  }
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if (monkey.isTouching(bananasGroup)) {
    bananasGroup.destroyEach();
  }
  
  if (monkey.isTouching(obstaclesGroup)) {
    bananasGroup.destroy();
    obstaclesGroup.destroy();
    
    monkey.destroy();
  }
  
  bananas();
  obstacles();
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);

  
  drawSprites();
}

function bananas(){
 if (frameCount % 80 === 0){
   var banana = createSprite(600,165,10,40);
   banana.velocityX = -(6);
  banana.y = Math.round(random(120,200));
   banana.addImage("banana",bananaImage);
   banana.scale = 0.1;
   banana.lifetime = -1;
   
   bananasGroup.add(banana);
 }
}

function obstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.y = 315;
   obstacle.velocityX = -(6);
   obstacle.addImage("obstacle",obstacleImage);
   obstacle.scale = 0.2;
   obstacle.lifetime = -1;
   
   obstaclesGroup.add(obstacle);
 }
}
   






