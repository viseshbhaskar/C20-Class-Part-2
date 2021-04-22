var fixedRect;
var movingRect;

function setup() {
  createCanvas(1200,800);
fixedRect = createSprite(400,400,30,100);
fixedRect.shapeColor = "red";
movingRect = createSprite(700,400,100,30);
movingRect.shapeColor = "green";
fixedRect.velocityX = 3;
movingRect.velocityX = -3;
}

function draw() {
  background("black");
  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 && 
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 && 
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2) {
movingRect.velocityX = movingRect.velocityX *(-1);
fixedRect.velocityX = fixedRect.velocityX *(-1);
  }  
  drawSprites();
}