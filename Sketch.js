var player;
var food;
var basicEnemy;
var hud;
var scl = 20;
var enemies = [];
var score = 0;
var lives = 1;
var levels = 1;
var lastScore = 0;


function setup() {
  createCanvas(600, 500);
  resetSketch();
  frameRate(10);

  var button = createButton("Click to Play!");
  button.mousePressed(resetGame);

} // ***** end of setup function ****** //


function resetGame() {
  player = new Player();
  basicEnemy = new BasicEnemy();
  hud = new HUD();
  foodLocation();
  score = 0;
  lives = 3;
  levels = 1;

  for (var i = 0; i < 1; i++) {
    enemies[i] = new BasicEnemy();
  }
}

function addEnemy() {
    enemies.push(new BasicEnemy());
}

function gameOverText() {
  textSize(30);
  gameOver = text("Game Over!", 230, height/2);

  textSize(20);
  gameOver = text("Click button to play again!", 200, 280);

}

function ifDead() {
  if (keyCode === UP_ARROW){
    player.dir();
  } else if (keyCode === DOWN_ARROW) {
    player.dir();
  } else if (keyCode === LEFT_ARROW) {
    player.dir();
  } else if (keyCode === RIGHT_ARROW) {
    player.dir();
  }
}

function foodLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(51);
  player.update();
  player.show();

  //food
  fill(0, 200, 0);
  rect(food.x, food.y, scl, scl);

  if (snake.eats(food)) {
    foodLocation();
    hud.scoreUpdate();
  }

  //basicEnemy
  basicEnemy.update();
  basicEnemy.show();

  for (var i = 0; i < enemies.length; i++) {
    enemies[i].show();
    enemies[i].update();

    if (enemies[i].intersects(snake)) {
      hud.changeColor();
    }

    if (player.hits(basicEnemy)) {
      hud.changeColor();
    }
  }

  //HUD
  hud.show();
  hud.update();

  if (lives <= 0) {
    gameOverText();
    ifDead();
  }

  if (score > lastScore) {
    if (score === 50) {
      addEnemy();
      basicEnemy.speed();
      enemies[i].speed();
      hud.levelUpdate();
      hud.displayLevel2();

    } else if (score === 100) {
      addEnemy();
      basicEnemy.speed();
      enemies[i].speed();
      hud.levelUpdate();
      hud.displayLevel3();

    } else if (score === 150) {
      addEnemy();
      basicEnemy.speed();
      enemies[i].speed();
      hud.levelUpdate();
      hud.displayLevel4();
    }
    lastScore = score;
  }




} // ***** END OF DRAW *******//

function keyPressed() {
  if (keyCode === UP_ARROW){
    snake.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1 , 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1 , 0);
  }
}
