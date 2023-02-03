//import { FlyControls } from "./three/FlyControls";

let r = 0;
let x = 0;
let y = 0;
let j = 0;
let z = 0;
let m = 0;

function setup() {
  let img = createImg("https://media.giphy.com/media/GPWKoHhTMmjTYqOTVG/giphy.gif");
  //let img = createImg();
    img.position(1200,75);
    img.size(150,150);
  
  // let div = createDiv("Look Around");
  //   div.position(1000, 450);
  //   div.size(200, 200);

  let canvas = createCanvas(windowWidth,windowHeight);
  canvas.parent("p5js_canvas");
  canvas.position(0,0);

  // This is the inflection point, where you can EITHER have orbit control and div element or sketch.js and div element but for some reason you can't have all three....
  controls.update();
  //flycontrols.update();
  //orbitControls.update();
}

function draw() {

  background(220, 180, 200,0);

  // ellipse(width/3,height/3,10);
  // translate(width/3,height/3)
  // rotate(r=r+.05);
  // ellipse(20,20,10);

  // push();
  // ellipse(width/3,height/3,10);
  // translate(width/3,height/3)
  // rotate(r=r+100);
  // fill('red')
  // ellipse(10,100,10);
  // pop();

  // new script

  // push();
  // noStroke();
  // translate(400,400);
  // j=j+1;
  // y=sin(r=r+0.1) * j;
  // x=cos(r=r+0.1) * j;
  // stroke(0);
  // noFill(0,250,120);
  // ellipse(x,y++,14);
  // pop();

 
}