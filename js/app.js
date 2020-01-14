var canvas=$("canvas")

var Car = function(x, y) {
    
    this.speed = randomIntFromInterval(100,200);
    this.sprite = 'images/car.png';
    this.x=x;
    this.y=y;
   

};


var Beetle= function(x, y) {
    this.speed = randomIntFromInterval(190,300);
    this.sprite = 'images/beetle.png';
    this.x = x;
    this.y = y;
   
};
Beetle.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Beetle.prototype.update= function(dt)
{

    if(this.x < 1305) {
        this.x+=this.speed*dt;
    }
    else {
    this.x=-90;
        if(character.score>=5) {
            this.speed = randomIntFromInterval(200,600);
        }
        else if(character.score>=8) {
            this.speed = randomIntFromInterval(300,800);
        }
        else {
            this.speed = randomIntFromInterval(190,300);
        }
}

detectCollision(character,this)
}

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

function detectCollision(char , enemy){
    var left1 = char.x ;
    var up1 = char.y;

    var right2 = enemy.x ;
    var down2 =  enemy.y ;

    
    

    if( (left1-70 < right2 && right2<left1+40 && up1-30 < down2 && down2 < up1+30) ) {
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
    if(this.y==60) {
        
        this.score+=1;
        document.getElementById("score").innerHTML = this.score;

        this.reset()
    }
    if( this.y==410)
    window.scrollTo( 0, this.y - character.step );
    if( this.y>750)
    window.scrollTo( 0, this.y - character.step );
   
};

character.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    

};

character.prototype.handleInput = function(key) {

    if(key=="up" && this.y>30) {
        moveUp();
    }
    else if(key=='down' && this.y<780) {
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
    window.scrollTo(0, 1000);
    this.x=550 ;
    this.y=780;
};



// Now instantiate your objects.
var a = new Car(-10, 65);
var b = new Car(-50, 145);
var c = new Car(-100, 225);
var d = new Car(-200, 65);
var e = new Car(-400, 145);
var f = new Car(-600, 225);
var g= new Car(-320, 340);
var h= new Car(-20, 290);
var i= new Car(-60, 490);
var j= new Car(-220, 590);
var k= new Car(-200, 590);
var Beetle1= new Beetle(-10,70);
var Beetle2= new Beetle(-40,350);
var Beetle3= new Beetle(-80,65);
var Beetle4= new Beetle(-150,410);
var Beetle5= new Beetle(70,500);
allEnemies = [a,b,c,d,e,f,g,h,i,j,k,Beetle1,Beetle2,Beetle3,Beetle4,Beetle5];
var character = new character();




function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    character.handleInput(allowedKeys[e.keyCode]);
});







