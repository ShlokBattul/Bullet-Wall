var wall,thickness;
var bullet1,bullet2,bullet3,bullet4,speed,weight;
  function setup() {
  createCanvas(1365,500);
  rectMode(CENTER)
  
  speed=random(223,321); 
  bullet1=createSprite(100,200, 50, 10);
  bullet1.velocityX=random(10,20);

  wall=createSprite(1100,200,thickness,height/2); 
   
  weight=random(30,52);
  thickness=random(22,83); 
}

function draw() {
  background(0); 
  drawSprites();
  
  //console.log(bullet1.position.x)

  if (bullet1.isTouching(wall)) {
    bullet1.velocityX=0
    var damage=0.5 * weight * speed * speed/ (thickness * thickness * thickness )
  if (damage>10) {
    wall.shapeColor=color(255,0,0)
  }
  if (damage<10) {
    wall.shapeColor=color(0,255,0)  
  }
}
}

  

  