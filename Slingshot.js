class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        //to the images for slingShot
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
        
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attached(body){
        this.sling.bodyA = body
    }




    display(){
        //to create display to display slingShot
        image(this.image1,200,20);
        image(this.image2,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
        //to give line colour through colourZilla    
            stroke(48,22,8);
        // to make a rubberBand thick when bird is on right side    
            if(pointA.x>200){
                strokeWeight(7);
                line(pointA.x-25, pointA.y, pointB.x+20, pointB.y+10);
                line(pointA.x-25, pointA.y, pointB.x-20, pointB.y+10);
                image(this.image3,pointA.x-30,pointA.y-10,10,30);
            }
        // to make a rubberBand thin when bird is on left side    
        else{
            strokeWeight(3);
            line(pointA.x-25, pointA.y, pointB.x+20, pointB.y+10);
            line(pointA.x-25, pointA.y, pointB.x-20, pointB.y+10);
            image(this.image3,pointA.x-30,pointA.y-10,10,30);
        }
            
        }
    }
    
}