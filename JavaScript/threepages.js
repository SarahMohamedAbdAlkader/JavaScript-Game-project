$(".startbtn").click(function() {
  window.location.href = "Html/characters.html";
});
$("body").after(
  '<div id="myModal" class="modal"><!-- Modal content --><div class="modal-content"><span class="close">&times;</span><p id="helpinsurtuction">Here is Your Instructions to become a WINNER:</br></p><p id="helpinsurtuction2">Choose your HERO..</br></br>Use your keyboard arrows to move your character.. </br></br>WATCH OUT, try to avoid your enemies..</br></br>Try to make your hero reach safely.</p></div></div>'
);
var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");
modal.style.display = "none";
$(".helpbtn").on({
  click: function() {
    modal.style.display = "block";
  }
});

span.onclick = function() {
  modal.style.display = "none";
};

$(".nextbtn2").click(function() {
  window.location.href = "Html/chooseLevel.html";
});

$(".setbtn").click(function() {
  window.location.href = "../Html/settings.html";
});

$(".backbtn").click(function() {
  window.location.href = "Html/characters.html";
});

$(".backbtn2").click(function() {
  window.location.href = "../1stPage.html";
});

$(".level1btn").click(function() {
  window.location.href = "../Html/game.html";
  localStorage.setItem("level", 1);
});
$(".level2btn").click(function() {
  window.location.href = "../Html/game.html";
  localStorage.setItem("level", 2);
});
$(".level3btn").click(function() {
  window.location.href = "../Html/game.html";
  localStorage.setItem("level", 3);
});

$("#hero1").click(function() {
  //Boy Minion
  localStorage.setItem("Heroboy", 1);
  localStorage.setItem("BoyImg", "../Images/hero1.png");
  localStorage.setItem("click", 1);
  window.location.href = "../Html/chooseLevel.html";
});

$("#hero2").click(function() {
  //Girl Minion
  localStorage.setItem("Heroboy", 0);
  localStorage.setItem("click", 1);
  localStorage.setItem("GirlImg", "../Images/miniongirl.png");
  window.location.href = "../Html/chooseLevel.html";
});

setInterval(function() {
  $("header")
    .fadeOut("slow")
    .fadeIn("slow");
}, 2000);

setInterval(function() {
  $("head")
    .fadeOut("slow")
    .fadeIn("slow");
}, 2000);
