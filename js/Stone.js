class Stone {
    constructor(x,y,radius) {
        this.x=x;
        this.y=y;
        this.radius=radius;

        this.body = Matter.Bodies.circle(x,y,this.radius);
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius);
        pop();
    }
}