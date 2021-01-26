$(".startbtn").click(function(){

    window.location.href = "characters.html";
})
$("body").after('<div id="myModal" class="modal"><!-- Modal content --><div class="modal-content"><span class="close">&times;</span><p id="helpinsurtuction">Here is Your Instructions to become a WINNER:</br></p><p id="helpinsurtuction2">Choose your HERO..</br></br>Use your keyboard arrows to move your character.. </br></br>WATCH OUT, try to avoid your enemies..</br></br>Try to make your hero reach safely.</p></div></div>')
var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");
modal.style.display = "none";
$(".helpbtn").on({
    click:function(){

    modal.style.display = "block";
},
});

span.onclick = function() {
    modal.style.display = "none";
  }
  
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

