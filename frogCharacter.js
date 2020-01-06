export default class frogCharacter {

    constructor(canvas) {
        this.width = 100;
        this.height = 100;

        this.position = {
            x: 10,
            y: canvas.height - this.height - 10

        }
    }
    draw (ctx){
        let frog = document.getElementById("frog");
        ctx.drawImage( frog , this.position.x, this.position.y );
    }
    test(){
        console.log("hiiiii");
        
    }

}

