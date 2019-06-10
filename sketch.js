//CREDIT TO BACKROUND: VINCENT HARKINS
let Solar= [];
let Stars = []
let p =0;
let score= 0;
function setup() {
    //set up
    createCanvas(600,600);
    for (let i = 0; i < 5;i++){
        Solar[i]= new solar();
    }
    for(let p =0;p < 1000;p ++){
        Stars[p]= new Star();
    }
}

function draw() {
    background(255,100);
    for (let i = 0; i < 5;i++){
        Solar[i].move();
        Solar[i].show();

    }
    for(let p =0;p < 1000;p ++){
        Stars[p].show();
    }
    //make ball change colors
    p+= 0.1
    fill(p+=10)
}
class solar{
    //class setup
    constructor(){
        this.x = 200;
        this.y = 200;
        this.spx = 1;
        this.spy = 1;
        this.dx = 1;
        this.dy = 1;
        this.ex = 10;
        this.ey = 10;
    }
    move(){
        //code for shooting the ball out of the line
        if(mouseIsPressed){
            this.x = mouseX
            this.y = mouseY
            if(mouseX > width/2){
                this.dx = 1
            }
            if(mouseX < width/2){
                this.dx = -1
            }
            if(mouseY > height/2){
                this.dy = 1
            }
            if(mouseY < height/2){
                this.dy = -1
            }
        }
        this.x = this.x + this.spx*this.dx
        this.y = this.y + this.spy*this.dy
        this.ey = this.ey



        if(this.x > this.ex && this.x < this.ex + 10 && this.y > this.ey && this.y < this.ey + 10){
            this.ex = random(width)
            this.ey = random(height)
            score +=1
        }

        if(this.ey < height/2 ){
            this.ey += 1
        }
        if(this.ex < width/2){
            this.ex += 1
        }
        if(this.ey > height/2 ){
            this.ey -= 1
        }
        if(this.ex > width/2){
            this.ex -= 1
        }
    }

    show(){
        //line that is the graph
        line(width/2,height,width/2,0)
        line(0,height/2,width,height/2)//
        rect(this.ex,this.ey,10,10)
        //cirlce in the middle with line that follows mouse
        line(mouseX,mouseY,width/2,height/2)
        ellipse(width/2,height/2,20,20)
        ellipse(this.x,this.y,10,10)
        fill(0)
        textSize (100)
        text(score,10,10,100,100)
        if(score >= 100){
            background(0)
            fill(255)
            text('YOU WIN!!!',100,100,255)
        }


    }
}

class Star{
    constructor(){
        this.stx = random(-800,800) ;
        this.sty = random(-800,800) ;
        this.shape = random(1,3);
    }
    show(){
        if (this.x < 800){
            if (this.shape < 2){
                this.x += random(1.5,2.5)
            }else{
                this.x += random(1,1.5)
            }
        }else{
            this.x = -300
        }
        fill(255)
        ellipse(this.stx+this.x,this.sty+this.x,this.shape,this.shape)
    }

}