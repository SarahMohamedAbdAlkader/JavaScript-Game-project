
  
class minionCharacter {
    constructor() {
        this.width = 50;
        this.height = 80;
        this.step = 10;
        this.score=0;
        this.position = {
            //x: canvas.width/2 - this.width/2 ,
            //y: canvas.height - this.height - 10
            x: 20,
            y: canvas.height-this.height
        }
    }
    setPosition(x,y){
        this.position.x = x;
        this.position.y = y;
    }
    draw(ctx){
        let minion = document.getElementById("minion");
        ctx.drawImage( minion , this.position.x, this.position.y, this.width , this.height);
    }
    moveLeft(){
        this.position.x += this.step;
        if(this.position.x + this.width > canvas.width) 
            this.position.x = canvas.width - this.width;
    }
    moveRight(){
        this.position.x -= this.step;
        if(this.position.x < 0) this.position.x = 0; 
    }
    moveUp(){
        this.position.y -= this.step
        if(this.position.y < 0) this.position.y = 0;
        
    }

    moveDown(){
        this.position.y += this.step
        if(this.position.y >2420) this.position.y =2420;
        
    }
    update(){
        if(this.position.y==10) {
        
            this.score+=1;
            document.getElementById("score").innerHTML = this.score;
    
            this.position.y=canvas.height-minion.height;
        }
        if( this.position.y<=canvas.height)
        window.scrollTo( 0, this.position.y - minion.step );
        if( this.position.y==650)
        window.scrollTo( 0, this.position.y - minion.step );
       
console.log(this.position.y)


    }
}

class Car {
    constructor() {
        this.width = 140;
        this.height = 140;

        this.speed=randomIntFromInterval(200,700);
        this.position = {
            x: canvas.width/2 - this.width/2 ,
            y: canvas.height - this.height - 10
        }
    }
    setPosition(x,y){
        this.position.x = x;
        this.position.y = y;
    }
    draw(ctx){
        for( var i=0;i<8;i++)
       {car[i] = document.getElementById("car");
        ctx.drawImage( car[i] , this.position.x, this.position.y, this.width , this.height);}

    }
    update(){

        this.position.x += this.speed*dt; // move down
        if (this.position.x>canvas.width){this.position.x=-50;}
        detectCollision(minion , this);
        if(this.x <canvas.width) {
            this.x+=this.speed*dt;
        }
        else {
        this.x=-300;
            if(minion.score>=5) {
                this.speed = randomIntFromInterval(130,500);
            }
            else if(minion.score>=8) {
                this.speed = randomIntFromInterval(200,800);
            }
            else {
                this.speed = randomIntFromInterval(100,200);
            }
        }

    }
}

class InputHandler{
    constructor(minion){
        document.addEventListener("keydown", function(event){
            switch (event.keyCode){
                case 39 : //left
                    minion.moveLeft();
                    break;
                case 37 : //right
                    minion.moveRight();
                    break;
                case 38 : //up
                    minion.moveUp();
                    break;
                case 40: //down
                     minion.moveDown();

            } 
        });
    }
}
function detectCollision(rect1 , rect2){
    var left1 = rect1.position.x ;
    var right1 = rect1.position.x + rect1.width ;
    var up1 = rect1.position.y;

    var left2 = rect2.position.x;
    var right2 = rect2.position.x + rect2.width ;
    var down2 =  rect2.position.y + rect2.height  ;

    if( (left1 < right2 && left1 > left2 || right1 < right2 && right1 > left2 )
        && up1 < down2 )
       { console.log("collision !!");
        reset()}
        

}
function reset()
{
minion.position.x=20;
minion.position.y=canvas.height-minion.height;


}
let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let minion = new minionCharacter(); // the playing character
minion.draw(ctx);

let car = new Car();
let car2 = new Car();
let car3 = new Car();
let car4 = new Car();
let car5 = new Car();
let car6 = new Car();
let car7 = new Car();
let car8 = new Car();
let car9 = new Car();
let car10 = new Car();
let car11 = new Car();
let car12 = new Car();
let car13 = new Car();

car.setPosition(0 ,20);
car2.setPosition(-940 ,60);
car3.setPosition(90 ,140);
car4.setPosition(-220 ,265);
car5.setPosition(-100 ,392);
car6.setPosition(0 ,560);
car7.setPosition(50 ,760);
car8.setPosition(50 ,1200);
car9.setPosition(90 ,1450);
car10.setPosition(-50 ,1650);
car11.setPosition(450 ,1970);
car12.setPosition(790 ,2070);
car13.setPosition(50 ,2170);
var cars=[car,car2,car3,car4,car5,car5,car6,car7,car8,car9,car10,car11,car12,car13]
new InputHandler(minion);


function randomIntFromInterval(min,max)
{    dt = (max - min) / 1000.0;
  
    var result= Math.floor((Math.random()*(max-min+1)+min));
    return result*dt;
}


function loop() {   
    ctx.clearRect(0,0 ,canvas.width ,canvas.height );
    minion.draw(ctx); // the playing character
    car.draw(ctx);
    car.update();
    car2.draw(ctx);
    car2.update();
    car3.draw(ctx);
    car3.update();
    car4.draw(ctx);
    car4.update();
    car5.draw(ctx);
    car5.update()
    car6.draw(ctx);
    car6.update();
    car7.draw(ctx);
    car7.update();
    car8.draw(ctx);
    car8.update();
    car9.draw(ctx);
    car9.update();
    car10.draw(ctx);
    car10.update();
    car11.draw(ctx);
    car11.update();
    car12.draw(ctx);
    car12.update();
    car13.draw(ctx);
    car13.update();


    // for collision
    
   minion.update();
    requestAnimationFrame(loop);
}

loop();


