class Chain{
    constructor(bodyA,pointB){
       var options = {
           bodyA :bodyA,
           pointB :pointB,
           length :200,
           stiffness :0.5,
        }
        this.chain = Matter.Constraint.create(options)
        this.pointB=pointB
       World.add(world,this.chain)
    }
   display(){
       var pointA=this.chain.bodyA.position
       var pointB=this.pointB
       strokeWeight(3)
       stroke("black")
       line(pointA.x,pointA.y,pointB.x,pointB.y)
   
   
   }
   
}