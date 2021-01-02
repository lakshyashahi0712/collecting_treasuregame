//declaring variables 
var PLAY = 1
var END = 0
var gamestate = PLAY
var gameover ;
var knife ;
var fruit1 , fruit2 , fruit3 , fruit4 ;
var alien1 , alein2 ;
var fruit
var fruitGroup;
var alienGroup;
var score
var gameover;


function preload(){
  
  //image for variables 
  knifeimg = loadImage("sword.png")
  fruit1img = loadImage("fruit1.png")
  fruit2img = loadImage("fruit2.png")
  fruit3img = loadImage("fruit3.png")
  fruit4img = loadImage("fruit4.png")
  alien1img = loadImage("alien1.png")
  alien2img = loadImage("alien2.png")
  gameoverimg = loadImage("gameover.png")
  
}

function setup(){
    createCanvas(600, 500);
  
  //sprites for variables
  knife = createSprite(200,150,20,20)
  knife.addImage(knifeimg)
  knife.scale = 0.5
  
  gameover = createSprite(300,200,20,20)
  gameover.addImage(gameoverimg)
  gameover.sclae = 2
  
  //creating groups
  fruitGroup = createGroup();
  alienGroup= createGroup();
   
  score = 0
}

function draw(){

   background("black");
  
  // gamestate is play
  if (gamestate === PLAY){
    
    spawnfruit();
    spawnalien()
    gameover.visible = false
    //for scoring
    text("Score: "+ score, 500,50);


    
   knife.x = World.mouseX 
   knife.y = World.mouseY 
  
    if(knife.isTouching(fruitGroup)){
     
      score = score+2
      fruitGroup.destroyEach();
    }
    if(knife.isTouching(alienGroup)){
      
      gamestate = END
      knife.destroy()
      
    }
    
  }
  // gamestate is end
  if(gamestate === END ){
    
    fruitGroup.destroyEach();
    alienGroup.destroyEach();
    alienGroup.velocityX = 0
    fruitGroup.velocityX = 0
    gameover.visible = true
    
  }
  
  
  
  drawSprites();
}

//function for fruit
function spawnfruit() {
  
 if (frameCount % 70 === 0){
   fruit = createSprite(400,165,10,40);
   fruit.velocityX = -6;
   
    //generate random fruits
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: fruit.addImage(fruit1img);
              break;
      case 2: fruit.addImage(fruit2img);
              break;
      case 3: fruit.addImage(fruit3img);
              break;
      case 4: fruit.addImage(fruit4img);
              break;
  default: break;
    
  
    }
   fruit.scale = 0.24
   fruit.lifetime = 100
   fruit.x = Math.round(random(500,560));
   fruit.y = Math.round(random(20,450));
   fruitGroup.add(fruit)
  
 }
}

//function for aliens
function spawnalien(){
  
   if (frameCount % 200 === 0){
   alien = createSprite(400,165,10,40);
   alien.velocityX = -6;
   
    //generate random fruits
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: alien.addImage(alien1img);
              break;
      case 2: alien.addImage(alien2img);
              break;
     
  default: break;
    
  
    }
   alien.scale = 1
   alien.lifetime = 100
   alien.x = Math.round(random(500,560));
   alien.y = Math.round(random(20,450));
   alienGroup.add(alien)
 }

}
