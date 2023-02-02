function setup() {
    let canvas = createCanvas(windowWidth,windowHeight)
    //canvas.parent("p5js_canvas")
}

function draw() {
    // noStroke();
    background(220, 180, 200,0);
    // fill(180, 200, 40);
    // strokeWeight(6);
    // stroke(180, 100, 240);
    // for (let i = 0; i < width; i += 15) {
    //   line(i, 0, i, height);
    // }
    
    // different script
  
    // background(220,220,220)
    // ellipse(width/3,height/3,10);
    // translate(width/3,height/3)
    // rotate(r=r+.05);
    // fill('red')
    // ellipse(10,100,10);
  
  
    push();
    noStroke();
    translate(400,400);
    j=j+1;
    y=sin(r=r+0.1) * j;
    x=cos(r=r+0.1) * j;
    stroke(0);
    noFill(0,250,120);
    ellipse(x,y++,14);
    pop();
}