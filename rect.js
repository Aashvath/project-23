class Rect {
    constructor(x,y,width,height){
var options={
    density:0.2,
    friction:1.0,
    restitution:1.0
}
this.body=Bodies.rectangle(200,100,20,20,options)
World.add(world,this.body)
    }
    display(){
        var pos= this.body.position;
        rectMode=CENTER;
        fill(255);
        rect(pos.y,pos.x,this.width,this.height);
    }
}