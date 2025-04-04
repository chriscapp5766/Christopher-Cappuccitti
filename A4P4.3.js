draw() {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.lineWidth = 3;
  }
  update() {
    if ((this.x + this.size) >= width) {
      this.x = this.size;
    }

    if ((this.x - this.size) <= 0) {
      this.x = this.size;
    }

    if ((this.y - this.size) >= height) {
      this.y = this.size;
    }

    if ((this.y - this.size) <= 0) {
      this.y = this.size;
    }
  }
// detects the ball to make it not disapeer when the couner meets it it will lower the counter
collisionDetect() {
  for (const ball of balls) {
    if (ball.exist) {
      const dx = this.x - ball.x;
      const dy = this.y - ball.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < this.size + ball.size) {
        ball.exist = false;
        ballCount--;
        ballcountdisplay.textContent = `Ball count: ${ballCount}`;
       
      }
    }
  }

}
}

const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always at one ball width
    //moves ball away from edge of the screen
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );

  balls.push(ball);
}
const evilcircle = new EvilCircle(random(0, width), random(0, height));
function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    if (ball.exist) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
    }
  }

  evilcircle.draw();
    evilcircle.collisionDetect();
    evilcircle.update();

  requestAnimationFrame(loop);
}

loop();