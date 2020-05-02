class Bob{
    constructor(radius) {
      var options = {
         isStatic:true
        
      }
      this.body = Bodies.circle(radius, options);
      this.width = width;
      this.height = height;
      this.body.position.x = mouseX
      this.body.position.y = mouseY

      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      pos.x = mouseX
      pos.y = mouseY
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
     
            ellipse(this.bob.position.X,this.bob.position.Y,20,20);
      pop();
    }
  };
  