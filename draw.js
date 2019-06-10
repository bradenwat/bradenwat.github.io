x = 'got ';

function setup() {
    createCanvas(1400, 800);
    button = createButton('reset');
    button.mousePressed(reset)
}

function reset(){
    background(0)
}

function draw() {

    if (mouseIsPressed) {
        x = "0"
        fill(random(255),random(255),random(255));
    } else {
        fill(random(255),random(255),random(255));
        x = "O"
    }
    textSize((mouseX -  mouseY)*2)
    text(x, mouseX , mouseY, 10);
}