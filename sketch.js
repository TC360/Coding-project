var sprite
function setup() {
  createCanvas(400,400);
  sprite = createSprite(200,200,50,50);
}

function draw() 
{
  background(30);
  if(keyDown(RIGHT_ARROW)){
    sprite.x =sprite.x+3
  }
  if(keyDown(LEFT_ARROW)){
    sprite.x =sprite.x-3
  }
  if(keyDown(UP_ARROW)){
    sprite.y = sprite.y-3
  }
  if(keyDown(DOWN_ARROW)){
    sprite.y = sprite.y+3
  }

drawSprites();
}




