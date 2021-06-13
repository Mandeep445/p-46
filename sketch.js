var astronaut, astronautImage, alien, alienImage,meteor, meteorImage, ufo, ufoImage,robot,robotImage;  
 var bg, bgImage;
var ground;
var score =0;
function preload(){
  astronautImage = loadAnimation("images/astronaut.png","images/astro2.png");
  alienImage = loadImage("images/alien.png");
  meteorImage = loadImage("images/meteor.png");
  ufoImage = loadImage("images/ufo.png");
  robotImage = loadImage("images/robot.png");
  bgImage = loadImage("images/download.jpg");
   
}
function setup () {
createCanvas (1200,600);
bg=createSprite (600,0,1200,600);
bg.scale = 0.70
bg.velocityX=-4;
bg.addImage(bgImage);
ground=createSprite(600,580,1200,10);
// ground.velocityX=-4;
astronaut= createSprite(100,450);
astronaut.addAnimation("astronaut",astronautImage);
astronaut.scale = 0.2
}
function draw () {
// background("black");
textSize(30);
fill(255);
text("Score: "+score, 400, 100);
if(keyDown("space")){
  astronaut.y = -10;
 
}
astronaut.y +=0.7; 
console.log(bg.x);
if(bg.x<0){ 
bg.x=bg.width/2;
 }
spawnUfos();
spawnMeteors();
drawSprites();
}
function spawnMeteors(){
  if (frameCount%60==0){
    var meteor = createSprite (1200,random(50,400));
    meteor.addImage(meteorImage);
    meteor.velocityX = -5;
    meteor.scale = 0.5
  }
}
function spawnUfos(){
  if (frameCount%60==0){
    var ufo = createSprite (1200,random(50,400));
    ufo.addImage(ufoImage);
    ufo.velocityX = -5;
    ufo.scale = 0.5
  }
}
