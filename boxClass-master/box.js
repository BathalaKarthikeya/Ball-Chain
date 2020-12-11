class Ball {
  constructor(x, y, r,fixed) {
    var options = {
        'restitution':2,
        'density':2,
        'isStatic': fixed
    }
    this.r = r;
    this.body = Bodies.circle(x, y, this.r, options);
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;

    ellipseMode(RADIUS);
    fill(random(0,255),random(0,255),random(0,255));
    ellipse(pos.x, pos.y, this.r);
  }
};


