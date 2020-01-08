class frogCharacter {
    constructor() {
        this.width = 100;
        this.height = 100;
        this.step = 10;
        this.position = {
            //x: canvas.width/2 - this.width/2 ,
            //y: canvas.height - this.height - 10
            x: 10,
            y: canvas.height/2 - this.height/2
        }
    }
    setPosition(x,y){
        this.position.x = x;
        this.position.y = y;
    }
    draw(ctx){
        let frog = document.getElementById("frog");
        ctx.drawImage( frog , this.position.x, this.position.y, this.width , this.height);
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
}

class carCharacter {
    constructor() {
        this.width = 100;
        this.height = 100;
        this.step = 2 ;
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
        let car = document.getElementById("frog");
        ctx.drawImage( car , this.position.x, this.position.y, this.width , this.height);
    }
    update(){
        this.position.y += this.step; // move up
    }
}

class InputHandler{
    constructor(frog){
        document.addEventListener("keydown", function(event){
            switch (event.keyCode){
                case 39 : //left
                    frog.moveLeft();
                    break;
                case 37 : //right
                    frog.moveRight();
                    break;
                case 38 : //up
                    frog.moveUp();
                    break;
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
        console.log("collision !!");
}

let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let frog = new frogCharacter(); // the playing character
frog.draw(ctx);

let car = new carCharacter();
car.draw(ctx);
car.setPosition(300 ,0);


new InputHandler(frog);

function loop() {   
    ctx.clearRect(0,0 ,canvas.width ,canvas.height );
    frog.draw(ctx); // the playing character
    car.draw(ctx);
    car.update();

    // for collision
    detectCollision(frog , car);
   
    requestAnimationFrame(loop);
}

loop();
