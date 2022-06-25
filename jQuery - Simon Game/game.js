var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickSequence = [];
var level = 1;

$(document).keydown(function(event) {
  $("h1").text("Level " + level);
  nextSequence();
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  // console.log(gamePattern); *** Will need this
  var buttonSelector = "#" + randomChosenColor;
  // console.log(buttonSelector);
  $(buttonSelector).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  $("h1").text("level " + level++);
};

$(".btn").click(function() {
  var userChosenColor = this.id;
  userClickSequence.push(userChosenColor);
  animatePress(userChosenColor);
  playSound(userChosenColor);
  checkAnswer(level);
  // console.log(userClickSequence); *** Will need this
});

function animatePress(currentColor) {
  currentColorId = "#" + currentColor;
  $(currentColorId).addClass("pressed");
  setTimeout(function() {
    $(currentColorId).removeClass("pressed")
  }, 100);
};

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play(audio);
}

function gameOver() {
  var audio = new Audio("sounds/wrong.mp3");
  audio.play(audio);
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over")
  }, 1000);
  $("h1").text("Game Over, Press Any Key to Restart");
  $(document).keydown(function(event) {
    startOver();
  });
}

function checkAnswer(currentLevel) {
if (gamePattern.length > userClickSequence.length)
  if (gamePattern[userClickSequence.length - 1] === userClickSequence[userClickSequence.length - 1]){
  }
  else {
    gameOver();
  }
else if (gamePattern.length === userClickSequence.length) {
    if (gamePattern[gamePattern.length - 1] === userClickSequence[userClickSequence.length - 1]){
    setTimeout(function() {
    nextSequence();
    }, 1000);
    userClickSequence.splice(0, userClickSequence.length);
    }
    else {
      gameOver();
    }
  }
else if (gamePattern.length < userClickSequence.length) {
  gameOver();
}
}
function startOver() {
location.reload();
};
