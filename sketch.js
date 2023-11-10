function setup() {
  createCanvas(1000, 800);
   background("black");
}

function draw() {
  fill("black");
  stroke("white");
  strokeWeight(5);
  if (mouseIsPressed){
  rect(mouseX, mouseY, 20, 30);
  }
}
