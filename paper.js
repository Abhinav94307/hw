class paper 
{
  constructor(x, y, r) 
  {
    var options = 
    {
      isStatic:false,
        'restitution':0.3,
        'friction':3,
        'density':3
    }
    this.x=x
    this.y=y
    this.r = r;
    this.image = loadImage("paper.png");

    this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options);


    World.add(world, this.body);

  }

  display()
  {

    var paperpos =this.body.position;
    push();
    translate(paperpos.x, paperpos.y);
    
    rectMode(CENTER);
    imageMode(CENTER);
    strokeWeight(4);
    stroke("blue");
    fill(255);
    image(this.image,0, 0, this.r,this.r);
    pop();
  }
};