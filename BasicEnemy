var Width = 580;
var Height = 480;

function BasicEnemy() {
  this.x = random(900);
  this.y = random(900);
  this.velX = 15;
  this.velY = 15;

  this.speed = function () {
    this.velX += 5;
    this.velY += 5;
  }

  this.intersects = function (pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 25){
        return true;
      } else {
        return false;
      }
    }

  this.update = function () {
   this.x = this.x + this.velX;
   this.y = this.y + this.velY;

   //bounce enemy inside window
   if (this.x <= 0 || this.x >= Width){
     this.velX *= -1;
   }

   if (this.y <= 0 || this.y >= Height){
     this.velY *= -1;
   }

   //disable enemy from leaving window
    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

  this.show = function () {
    noStroke();
    fill(255, 0, 100);
    rect(this.x, this.y, scl, scl);
  }
}
