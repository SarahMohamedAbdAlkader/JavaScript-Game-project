class frogCharacter {

    constructor(canvas) {
        this.width = 100;
        this.height = 100;

        this.position = {
            x: 10,
            y: 10

        }
    }
    draw(ctx){
        let frog = document.getElementById("frog");
        ctx.drawImage( frog , this.position.x, this.position.y, this.width , this.height);

    }

    update(deltaTime){

       if(!deltaTime) return;
       this.position.x += 10 / deltaTime;
    }
}

let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let frog = new frogCharacter(canvas);
frog.draw(ctx);
let lastTime =0 ;

function loop(timeStamp) {

    let deltaTime = timeStamp - lastTime ;
    lastTime = timeStamp ;
    
    ctx.clearRect(0,0 ,canvas.width ,canvas.height );
    frog.update(deltaTime);
    frog.draw(ctx);
    
    requestAnimationFrame(loop);
}

loop();

