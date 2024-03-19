var d
var drops
function setup() {
  createCanvas(windowWidth, windowHeight);
  drops = new Drops(width, height, 100)
}

function draw() {
  background(230, 230, 250);
  drops.display()
  drops.update()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  drops.update_wh(width, height)
}
