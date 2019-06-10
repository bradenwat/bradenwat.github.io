let Solar= [];
function setup() {
    createCanvas(400, 400);
    for (let i = 0; i < 75;i++){
        Solar[i]= new solar();
        backgroundImage = loadImage("space.jpg");
    }
}

function draw() {

    background(255,15);
    for (let i = 0; i < 75;i++){
        Solar[i].move();
        Solar[i].show();
    }
}
class solar{
    constructor(){
        this.x = random(300);
        this.y = random(300);
        this.spx = 1;
        this.spy = 1;
        this.dx = 1;
        this.dy = 1;
        this.size = random(10)
    }
    move(){
        this.x = this.x+this.spx*this.dx
        this.y = this.y+this.spy*this.dy
        if( this.x > mouseX){
            this.spx -= 0.031
        }else{
            this.spx += 0.02
        }
        if(this.y > mouseY ){
            this.spy -= 0.031
        } else{
            this.spy += 0.02
        }
    }
    show(){
        fill(100,this.y,this.x)
        ellipse(this.x,this.y,this.size,this.size)
        fill(255,255,10)
        ellipse(200,200,20,20)
    }
}