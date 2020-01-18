$("body").append(
  '<audio src="../sounds/bgsound.mp3" controls="" autoplay="" loop="true" hidden="true"></audio>'
);

class minionCharacter {
  constructor() {
    this.width = 50;
    this.height = 90;
    this.step = 10;
    this.score = 0;
    this.position = {
      //x: canvas.width/2 - this.width/2 ,
      //y: canvas.height - this.height - 10
      x: 600,
      y: canvas.height - this.height
    };
  }
  setPosition(x, y) {
    this.position.x = x;
    this.position.y = y;
  }
  draw(ctx) {
    let minion = document.getElementById("minion");
    if (localStorage.getItem("Heroboy") === "0") {
      // minion.attr("src",localStorage.getItem('GirlImg'));
      minion.src = localStorage.getItem("GirlImg");
    } else if (localStorage.getItem("Heroboy") === "1") {
      // minion.attr("src",localStorage.getItem('BoyImg'));
      minion.src = localStorage.getItem("BoyImg");
    }
    ctx.drawImage(
      minion,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  moveLeft() {
    this.position.x += this.step;
    if (this.position.x + this.width > canvas.width)
      this.position.x = canvas.width - this.width;
  }
  moveRight() {
    this.position.x -= this.step;
    if (this.position.x < 0) this.position.x = 0;
  }
  moveUp() {
    this.position.y -= this.step;
    if (this.position.y < 0) this.position.y = 0;
  }
  moveDown() {
    this.position.y += this.step;
    if (this.position.y > canvas.height) this.position.y = canvas.height;
  }
  update() {
    if (this.position.y == 20) {
      this.score += 1;
      $("body").append(
        '<audio src="../sounds/winning.mp3" controls="" autoplay=""  hidden="true"></audio>'
      );
      document.getElementById("score").innerHTML = this.score;
      document.getElementById("level").innerHTML = level;
      this.position.y = canvas.height - minion.height;
      if (this.score >= 2) {
        level = 2;
        initGame();
      } else if (this.score >= 5) {
        level = 3;
        initGame();
      }
    }
    if (this.position.y <= canvas.height)
      window.scrollTo(0, this.position.y - 400);
  }
}

class Car {
  constructor() {
    this.width = 160;
    this.height = 160;

    this.speed = randomIntFromInterval(
      100 + 50 * (level - 1),
      200 + 100 * (level - 1)
    );
    this.position = {
      x: canvas.width / 2 - this.width / 2,
      y: canvas.height - this.height - 10
    };
  }
  setPosition(x, y) {
    this.position.x = x;
    this.position.y = y;
  }
  draw(ctx) {
    const carShape = document.getElementById("car");
    ctx.drawImage(
      carShape,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  update() {
    this.position.x += this.speed * dt; // move down
    if (this.position.x > canvas.width) {
      this.position.x = -50;
    }
    detectCollision(minion, this);
    if (this.x < canvas.width) {
      this.x += this.speed * dt;
    } else {
      console.log("no collision");
      this.x = -300;
    }
  }
}

class InputHandler {
  constructor(minion) {
    document.addEventListener("keydown", function(event) {
      switch (event.keyCode) {
        case 39: //left
          minion.moveLeft();
          break;
        case 37: //right
          minion.moveRight();
          break;
        case 38: //up
          minion.moveUp();
          break;
        case 40: //down
          minion.moveDown();
      }
    });
  }
}

function detectCollision(rect1, rect2) {
  var left1 = rect1.position.x;
  var right1 = rect1.position.x + rect1.width;
  var top1 = rect1.position.y;
  var bottom1 = rect1.position.y + rect1.height;

  var left2 = rect2.position.x;
  var right2 = rect2.position.x + rect2.width;
  var top2 = rect2.position.y;
  var bottom2 = rect2.position.y + rect2.height;

  if (
    ((left1 < right2 && left1 > left2) ||
      (right1 < right2 && right1 > left2)) &&
    ((top1 < bottom2 && top1 > top2) || (bottom1 < bottom2 && bottom1 > top2))
  ) {
    console.log("collision !!");
    reset();
    $("body").append(
      '<audio src="../sounds/punch.mp3" controls="" autoplay=""  hidden="true"></audio>'
    );
  }
}
function reset() {
  minion.position.x = 600;
  minion.position.y = canvas.height - minion.height;
}
let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

const getRndInteger = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

let level = localStorage.getItem("level");
let cars = [];
let minion = new minionCharacter();
function initGame() {
  // the playing character
  //minion.setPosition()
  minion.draw(ctx);
  let emptyCars = new Array(5 * level);
  emptyCars = emptyCars.fill(5);
  cars = emptyCars.map((car, index) => {
    newCar = new Car();
    let xDelta = getRndInteger(-50 * level, 0);
    let yDelta = 960 / (5 * level);
    newCar.setPosition(xDelta, yDelta * index);
    return newCar;
  });
  document.getElementById("score").innerHTML = minion.score;
  document.getElementById("level").innerHTML = level;
}

new InputHandler(minion);

function randomIntFromInterval(min, max) {
  dt = (max - min) / 1000.0; // 1000 ???
  var result = Math.floor(Math.random() * (max - min + 1) + min);
  return result * dt;
}

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  minion.draw(ctx); // the playing character
  cars.forEach(car => {
    car.draw(ctx);
    car.update();
  });
  minion.update();
  requestAnimationFrame(loop);
}
initGame();
loop();
