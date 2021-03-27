class Mango{
    constructor(x,y,width,height){
        var options={
            isStatic: true,
            restitution:0,
            friction:1          
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image= loadImage("Pluckingmangoes/mango.png")
        World.add(world, this.body); 
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
      }
}