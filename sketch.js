var swapButton;
var swapit = 1;

function swap() {
  if(swapit==1){
  squareColor = color('white');
  circleColor = color(0, 103, 71);
    swapit=0;
  }else{
  squareColor = color(0, 103, 71);
  circleColor = color('white');
    swapit=1;
  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  squareColor = color(0, 103, 71);
  circleColor = color('white');
  baseColor = color(0, 103, 71);
  circleX = width/2+circleSize/2+10;
  circleY = height/2;
  squareX = width/2-squareSize-10;
  squareY = height/2-squareSize/2;
  textFont("Proxima");
  fill('white');
  textSize(70);
  textAlign(CENTER, CENTER);
  
  swapButton = createButton("SWAP");
  swapButton.position(10, 10);
  swapButton.mousePressed(swap);
  swapButton.style("width", "100px");
  swapButton.style("border-radius", "10px");
  
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
let squareX, squareY;  // Position of square button
let circleX, circleY;  // Position of circle button
let squareSize = 90;   // Width/height of square
let circleSize = 93;   // Diameter of circle

let squareColor;
let circleColor;
let baseColor;

let squareOver = false;
let circleOver = false;

function draw() {
  update(mouseX, mouseY);

  if (squareOver) {
    background(squareColor);
    textAlign ()
    text('Ohio', width/2 - width * .18, height * .51);
  } else if (circleOver) {
    background(circleColor);
    if (swapit==1){
      fill(0, 103, 71);
    }else{
      fill(255, 255, 255);
    }
    
    text('University', width/2 - width * -.25, height * .51);
  } else {
    background(baseColor);
  }

  stroke(circleColor);
  fill(squareColor);
  square(squareX, squareY, squareSize);
  stroke(squareColor);
  fill(circleColor);
  circle(circleX, circleY, circleSize);
}

function update(x, y) {
  if( overCircle(circleX, circleY, circleSize) ) {
    circleOver = true;
    squareOver = false;
  } else if ( overSquare(squareX, squareY, squareSize) ) {
    squareOver = true;
    circleOver = false;
  } else {
    circleOver = squareOver = false;
  }
}

function overSquare(x, y, size) {
  if (mouseX >= x && mouseX <= x+size && 
      mouseY >= y && mouseY <= y+size) {
    return true;
  } else {
    return false;
  }
}

function overCircle(x, y, diameter) {
  const disX = x - mouseX;
  const disY = y - mouseY;
  if(sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
    return true;
  } else {
    return false;
  }
  let button;

}