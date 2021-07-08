class Rope {
    constructor(bodyA, bodyB, OffsetX, OffsetY)
    {
        this.offsetX = OffsetX;
        this.offsetY = OffsetY;

        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX, y:this.offsetY},
            length: 500,
            stiffness: 0.4
     }

     this.rope = Constraint.create(options);
     World.add(world, this.rope);
              
 }   
    display() {
  
        //this point is referring to bodyA
        var pointA = this.rope.bodyA.position;
        //this point is referring to bodyB
        var pointB = this.rope.bodyB.position;
        push();
        strokeWeight(6);
        line(pointA.x, pointA.y, pointB.x + this.offsetX, pointB.y + this.offsetY);
        //line(x1,y1,x2,y2);
        pop();
        
        
    }

}
