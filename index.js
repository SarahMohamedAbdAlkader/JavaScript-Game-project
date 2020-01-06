$(".startbtn").click(function(){

    window.location.href = "characters.html";
})

$(".helpbtn").click(function(){

    window.location.href = "Help.html";
})
$(".nextbtn2").click(function(){

    window.location.href = "chooseLevel.html";
})


$(".setbtn").click(function(){

    window.location.href = "settings.html";
})

$(".backbtn").click(function(){

    window.location.href = "characters.html";
})

$(".backbtn2").click(function(){

    window.location.href = "index.html";
})



setInterval(function(){
    $('header').fadeOut( "slow" ).fadeIn("slow")
}, 2000);


setInterval(function(){
    $('head').fadeOut( "slow" ).fadeIn("slow")
}, 2000);

var canvas1 = document.getElementById('myCanvas')
var canvas2 = document.getElementById('myCanvas2')
draw(canvas1);
 draw(canvas2);
 function draw(canvas) {
   

      var context = canvas.getContext('2d');
      var centerX = canvas.width / 2;
      var centerY = canvas.height / 2;
      var radius = 170;
      context.strokeStyle="black"
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.lineWidth = 10;
      context.stroke();
      
 }


