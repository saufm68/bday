var l_switch = false;

function togglelight() {
  $(".lights-out").toggleClass('hide');
  $(".char").toggleClass('hide');
  $(".bday_card").toggleClass('hide');
  l_switch = !l_switch;
  if(l_switch) {
    createBalloons(10);
    var audio = new Audio('party_blow.wav');
    audio.play();
  }
}

function openCard() {
  $('.enlarge_card').removeClass('hide');
}

function closeCard() {
  $('.enlarge_card').addClass('hide');
}

function random(num) {
  return Math.floor(Math.random()*num)
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = 5;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r-10},${g-10},${b-10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in 
  `
}

function createBalloons(num) {
  var balloonContainer = document.getElementById("balloon-container")
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();           
    balloonContainer.append(balloon);
  }
  setTimeout(function() {
    $("#balloon-container").empty();
  }, 5000);
}