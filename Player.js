function Player() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;

  //eat food
  this.eats = function (pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1){
        return true;
      } else {
        return false;
      }
    }

    this.hits = function (poss) {
      var d = dist(this.x, this.y, poss.x, poss.y);
        if (d < 20){
          return true;
        } else {
          return false;
        }
      }

  this.update = function() {
    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

  this.show = function() {
    noStroke();
    fill(255);
    rect(this.x, this.y, scl , scl);
  }

  this.dir = function (x , y) {
    this.xspeed = x;
    this.yspeed = y;
  }
}
