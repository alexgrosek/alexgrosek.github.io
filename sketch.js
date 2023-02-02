let r = 0;
let x = 0;
let y = 0;
let j = 0;

function setup() {
  //let img = createImg("https://toppng.com/uploads/preview/north-arrow-11549436420yyvgvtd8b7.png");
  let img = createImg()
  let div = createDiv("Look Around")

  let canvas = createCanvas(windowWidth,windowHeight)
  canvas.parent("p5js_canvas")
  //angleMode(RADIANS);
  //normalMaterial();

  div.position(1000, 450);
  div.size(200, 200);

  // img.position(50,50);
  // img.size(100,100);
  canvas.position(0,0);
  // This is the inflection point, where you can EITHER have orbit control and div element or sketch.js and div element but for some reason you can't have all three....
  //orbitControl();
  controls.update();
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

  //background(220,220,220)
  push();
  ellipse(width/3,height/3,10);
  translate(width/3,height/3)
  rotate(r=r+100);
  fill('red')
  ellipse(10,100,10);
  pop();

  // new script

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

  // orbitControl();
  // controls.update();
}