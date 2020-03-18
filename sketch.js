
function setup() {
  createCanvas(windowWidth, windowHeight);
  //strokeCap(ROUND)
}


function draw() {
  background(255);
  stroke(0);
  noFill();

  mX = map(mouseX, 0, windowWidth, 20, 200)
  mY = map(mouseY, 0, windowHeight, 20, 200)

  makeArc(mX, mY, ((mX + mY)/4));
}


function makeArc(mX, mY, amp){
  //mX and mY are grid and arc size
  time = millis() / 300;

  for (let y = 0; y < windowHeight; y+= mY){
    sw = abs(amp * sin(y * amp + time));
    for (let x1 = 0; x1 < windowWidth; x1 += 2 * mX){
      strokeWeight(sw*(mY/40));
      stroke(0)
      arc(x1, y, mX, mY, 0, PI);
    }

    for (let x2 = 0; x2 < windowWidth; x2 += 2 * mX){
      strokeWeight(sw*(mX/40));
      stroke(0);
      arc(x2 + mX, y, mX, mY, PI, 2 * PI);
    }
  }
}
