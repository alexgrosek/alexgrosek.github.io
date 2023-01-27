let xlist = [];
let ylist = [];
let ops = [-3,3];

// comment
function setup() {
  createCanvas(775,400);
  for (let i = 0; i < 400; i+=60){
    values(i+15);
  }
}

function draw() {
  //background(220);
  drawBlack();
  xlist = [];
  ylist = [];
}

function values(z){
  for (let i = 0; i < 800; i+=8) {
    x = random()*random(ops) + i
    y = random()*random(ops) + z
    append(xlist,x)
    append(ylist,y)
  redraw()
}
}

function drawBlack(){
  for (let i = 0; i < 800; i++) {
      strokeWeight(3);
      beginShape();
      curveVertex(xlist[i],ylist[i])
      curveVertex(xlist[i],ylist[i])
      curveVertex(xlist[i+1],ylist[i+1])
      curveVertex(xlist[i+1],ylist[i+1])
      endShape(CLOSE);
}
}