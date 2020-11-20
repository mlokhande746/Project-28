class Tree{
    constructor(x,y){
        
        this.x=x;
        this.y=y;
        this.dustbinWidth=450;
        this.dustbinHeight=600;
        this.wallThick=10;
        
        this.image=loadImage("tree.png");
        this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThick,{isStatic:true});
        this.leftBody=Bodies.rectangle(0,this.y-this.dustbinHeight/2,this.wallThick,
                      this.dustbinHeight,{isStatic:true});
        this.rightBody=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThick,
		               this.dustbinHeight,{isStatic:true});
        World.add(world,this.bottomBody);
        World.add(world,this.rightBody);
        World.add(world,this.leftBody);
    }
    display(){
        var pos=this.bottomBody.position;
        
        push();
        translate(pos.x,pos.y);
        fill(255);
        rectMode(CENTER);
        image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight);
        pop();
    }
}