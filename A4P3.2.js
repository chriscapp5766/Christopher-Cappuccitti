class Ball {
    constructor(x, y, velX, velY, color, size) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
    }
  
    draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
    }
  
    update() {
      if (this.x + this.size >= width) {
        this.velX = -Math.abs(this.velX);
      }
  
      if (this.x - this.size <= 0) {
        this.velX = Math.abs(this.velX);
      }
  
      if (this.y + this.size >= height) {
        this.velY = -Math.abs(this.velY);
      }
  
      if (this.y - this.size <= 0) {
        this.velY = Math.abs(this.velY);
      }
  
      this.x += this.velX;
      this.y += this.velY;
    }