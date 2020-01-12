var canvas=$("canvas")

var Car = function(x, y) {
    
    this.speed = randomIntFromInterval(100,200);
    this.sprite = 'images/car.png';
    this.x=x;
    this.y=y;
};


var Stone = function(x, y) {
    
    this.sprite = 'images/stone1.png';
    this.x = 550;
    this.y = 780;
};
Stone.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Car.prototype.update = function(dt) {
    
    if(this.x < 1305) {
        this.x+=this.speed*dt;
    }
    else {
    this.x=-90;
        if(character.score>=5) {
            this.speed = randomIntFromInterval(130,500);
        }
        else if(character.score>=8) {
            this.speed = randomIntFromInterval(200,800);
        }
        else {
            this.speed = randomIntFromInterval(100,200);
        }
    }

detectCollision(character,this)
  
};

function detectCollision(char , car){
    var left1 = char.x ;
    var up1 = char.y;

    var right2 = car.x ;
    var down2 =  car.y ;

    if( (left1-70 < right2 && right2<left1+50 && up1-40 < down2 && down2 < up1+50) ){
    character.score=0;
        document.getElementById("score").innerHTML = character.score;
        character.reset();
        console.log("collision !!");}
}


Car.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


var character = function() {
    this.sprite='images/hero1.png';
    this.x = 550;
    this.y = 780;
    this.score=0;
    this.step=30;


};

function moveLeft(){
    character.x -= character.step;
}
function moveRight(){
    character.x += character.step;
}
function moveUp(){

    character.y -= character.step;
    
}
function moveDown(){
    character.y += character.step;
    
}
character.prototype.update = function(dt) {console.log(this.y)
    if(this.y==30) {
        console.log(this.y)
        this.score+=1;
        document.getElementById("score").innerHTML = this.score;

        this.reset()
    }
};

character.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

character.prototype.handleInput = function(key) {

    if(key=="up" && this.y>30) {
        moveUp();
    }
    else if(key=='down' && this.y<410) {
        moveDown();
    }
    else if(key=='right' && this.x<1180) {
        moveRight();
    }
    else if(key=='left' && this.x>10) {
        moveLeft();
    }
};

character.prototype.reset = function() {
    this.x=550 ;
    this.y=780;
};



// Now instantiate your objects.
var a = new Car(-10, 65);
var b = new Car(-50, 145);
var c = new Car(-100, 225);
var d = new Car(-200, 65);
var e = new Car(-400, 145);
var f = new Car(-800, 225);
var g= new Car(-320, 340);
var h= new Car(-20, 290);
var i= new Car(-20, 490);
var j= new Car(-120, 590);
var k= new Car(-20, 690);
allEnemies = [a,b,c,d,e,f,g,h,i,j,k];
var character = new character();
var Stone= new Stone();



function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    character.handleInput(allowedKeys[e.keyCode]);
});







