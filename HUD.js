
function HUD() {
  this.x = 10;
  this.y = 5;
  this.col = color(255);
  this.rectColor = color(100, 200, 0);

  //location of health bar
  this.locationX = 110;
  this.locationY = 30;

  this.displayLevel2 = function () {
    $("#level2").show().delay(3000).fadeOut();
  }

  this.displayLevel3 = function () {
    $("#level3").show().delay(3000).fadeOut();
  }

  this.displayLevel4 = function () {
    $("#level4").show().delay(3000).fadeOut();
  }

  this.levelUpdate = function() {
    levels += 1;
  }

  this.scoreUpdate = function() {
    score += 5;
  }


  this.changeColor = function () {
    //white color
    this.col = color(255);
    this.locationX -= 10;
  }

  this.update = function () {
    if (this.locationX <= 0) {
          lives -= 1;
    }

    if (this.locationX <= 0) {
      this.locationX = 110;
    }
  }

  this.show = function () {
    stroke(255);
    rect(this.x, this.y, 110, 30);

    //white
    fill(this.col);
    rect(this.x, this.y, this.locationX, this.locationY);

    //health bar text
    fill(255, 0, 0);
    textSize(13);
    text("Health", 35, 25);

    //Score text
    fill(255);
    text("Score: " + score, 10, 55);
    text("Lives: " + lives, 10, 70);

    //Level text
    textSize(20);
    text("Level: " + levels, 260, 20);
  }
}
