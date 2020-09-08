var wall,thickness;
var bullet1,bullet2,bullet3,bullet4,speed,weight;
  function setup() {
  createCanvas(1365,500);
  rectMode(CENTER) 
  bullet1=createSprite(780, 50, 50, 10);
  bullet1.velocityX=speed;

  bullet2=createSprite(780,150, 50, 10);
  bullet2.velocityX=speed;

  bullet3=createSprite(780,250, 50, 10);
  bullet3.velocityX=speed;

  bullet4=createSprite(780,350, 50, 10);
  bullet4.velocityX=speed;

  wall=createSprite(100,200,thickness,height/2); 
  speed=random(223,321); 
  weight=random(30,52);
  thickness=random(22,83); 
}

function draw() {
  background(0); 
  drawSprites();
  
  //console.log(bullet1.position.x)

  if (Collided(bullet1,wall)) {
    bullet1.velocityX=0
    var damage=0.5 * weight * speed * speed/ (thickness * thickness * thickness )
  }

  if (damage>10) {
    wall.Shapecolor=color(255,0,0)
  }

  if (damage<10) {
    wall.Shapecolor=color(0,255,0)  
  }
}