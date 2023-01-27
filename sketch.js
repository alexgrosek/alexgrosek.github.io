let points = 0
let pointcheck = true;
let r = 0;


function setup() {
  createCanvas(500,500);
  textAlign(LEFT);
  angleMode(RADIANS);
  frameRate(60);
}


function draw() {
  let c = [mouseX,mouseY];
  let d = [width/2,height/2];
  
  background(220);
  noFill();
  ellipse(width/2,height/2,30);
  ellipse(mouseX,mouseY,12,12);
  

  push();
  translate(width/2,height/2);
  rotate(r=r+.01);
  arc1 = arc(0,0,80,80,PI,TWO_PI);
  //rotate(r=r+.01);
  //arc2 = arc(0,0,150,150,PI,QUARTER_PI);
  console.log(lineIntersectsArc([width/2,height/2],[mouseX,mouseY],[width/2,height/2],80,0,0))
  pop();
  
  let e = [0,0]
  let f = [PI,TWO_PI]
  
  line(width/2,height/2,mouseX,mouseY);
  textSize(14);
  fill(255,0,0);
  
  text(points,50,50);
  
  if (points >=3){
    text('GAME OVER',50,200);  
    noLoop();
  }
  
  if(dist(width/2,height/2,mouseX,mouseY)<10 && pointcheck == true){
    points = points + 1;
    pointcheck = false;
  }
  
  if(dist(width/2,height/2,mouseX,mouseY)>10){
    pointcheck=true;
  }
}

function lineIntersectsArc(lineStart, lineEnd, arcCenter, arcRadius, arcStart, arcEnd) {
  // Find the distance between the line's start and end points
  var lineDelta = {
    x: lineEnd.x - lineStart.x,
    y: lineEnd.y - lineStart.y
  };

  // Find the distance between the arc's center and the line
  var centerToLineStart = {
    x: lineStart.x - arcCenter.x,
    y: lineStart.y - arcCenter.y
  };

  // Calculate the dot product of the centerToLineStart vector and the lineDelta vector
  var dotProduct = centerToLineStart.x * lineDelta.x + centerToLineStart.y * lineDelta.y;

  // Calculate the squared length of the lineDelta vector
  var squaredLineLength = lineDelta.x * lineDelta.x + lineDelta.y * lineDelta.y;

  // Find the closest point on the line to the center of the arc
  var closestPoint = {
    x: lineStart.x + dotProduct * lineDelta.x / squaredLineLength,
    y: lineStart.y + dotProduct * lineDelta.y / squaredLineLength
  };

  // Check if the closest point is within the arc's radius
  if (dist(arcCenter.x, arcCenter.y, closestPoint.x, closestPoint.y) <= arcRadius) {
    // Check if the closest point is on the line segment
    if (closestPoint.x >= min(lineStart.x, lineEnd.x) && closestPoint.x <= max(lineStart.x, lineEnd.x) &&
        closestPoint.y >= min(lineStart.y, lineEnd.y) && closestPoint.y <= max(lineStart.y, lineEnd.y)) {
      // Check if the closest point is within the arc's start and end angles
      var angleToClosestPoint = atan2(closestPoint.y - arcCenter.y, closestPoint.x - arcCenter.x);
      if (angleToClosestPoint < 0) {
        angleToClosestPoint += TWO_PI;
      }
      if (angleToClosestPoint >= arcStart && angleToClosestPoint <= arcEnd) {
        return true;
      }
    }
  }
  return false;
}
