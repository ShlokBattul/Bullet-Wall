function touch(object1,object2){
    if(object1.x-object2.x<=object2.width/2+object1.width/2&&
      object2.x-object1.x<=object2.width/2+object1.width/2&&
      object1.y-object2.y<=object2.height/2+object1.height/2&&
      object2.y-object1.y<=object2.height/2+object1.height/2){
       return true
      }else{
      return false
      }

  function collided (bullet,wall2){
    bullet1RightEdge=bullet.x +  bullet.width;
    wallLeftEdge=wall2.x;
    if (bullet1RightEdge>=wallLeftEdge) {
     return  true
    }else{
     return false
    }
  }
}
