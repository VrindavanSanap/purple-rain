class Drop {
  constructor(width, height) {
    this.height = height
    this.width = width
    this.x = random(this.width);
    this.y = random(-500, -200);
    this.z = random(0, 20)
    this.len = map(this.z, 0, 20, 5, 20)
    this.yspeed = map(this.z, 0, 20, 1, 10)
    this.thick = map(this.z, 0, 20, 0.5, 3)
  }
  reset() {
    this.x = random(this.width)
    this.y = random(-500, -200);
    this.z = random(0, 20)
    this.yspeed = map(this.z, 0, 20, 2, 5)
    this.thick = map(this.z, 0, 20, 1, 2.5)
  }
  update_wh(width, height) {
    this.width = width
    this.height = height
  }
  fall() {
    this.y += this.yspeed
    let gravity = map(this.z, 0, 20, .2, 1)
    this.yspeed += gravity
    if (this.y > this.height) {
      this.reset()
    }
  }

  display() {
    stroke(138, 43, 226)
    strokeWeight(this.thick)
    line(this.x, this.y, this.x, this.y + this.len)
  }
}
