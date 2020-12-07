class Block{
    constructor(x, y, width, height){
        var options = {
            restitution : 0.9,
            friction : 0.0

        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        world.add(world,this.body)
        this.width = width;
        this.height = height;
        this.visibility=255;
    }
    score(){
        if(this.visibility<200 && this.visibility>-10){
           score++;
         }
       }
       display(){
         
         var pos =this.body.position;
         var angle = this.body.angle;
      
         if(this.body.speed<5){
           push();
           translate(pos.x, pos.y);
           rotate(angle);
           rectMode(CENTER);
           rect(0, 0, this.width, this.height);
           pop();
         }
         else{
           World.remove(world,this.body);
           push();
           this.visibility=this.visibility-3;
           pop();
   
        }
    }
      
       
    
}