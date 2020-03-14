var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern = []
var gameStarted = false
var level = 0


$(document).on("keydown", function () {
  if (!gameStarted) {
    //game started
    gameStarted = true
    updateLevelTitle()
    nextSequence()
  }

})

$(".btn").click(function (event) {
  if (gameStarted) {
    var userChosenColour = event.target.id
    userClickedPattern.push(userChosenColour)
    playSound(userChosenColour)
    animatePress(userChosenColour)

    if (areArraysEqual(userClickedPattern, gamePattern.slice(0, userClickedPattern.length))) {
      //correct answer
      if (userClickedPattern.length == gamePattern.length) {
        userClickedPattern = []
        nextSequence()
      }
    } else {
      //incorrect answer, reset game
      playSound("wrong")
      $("body").addClass("game-over")
      setTimeout(function() {
        $("body").removeClass("game-over")
      },200)
      resetGame()
    }
  }
})

function resetGame() {
  level = 0
  userClickedPattern = []
  gamePattern = []
  updateLevelTitle()
  nextSequence()
}

function nextSequence() {
  level++
  updateLevelTitle()
  randomNumber = Math.floor(Math.random() * 4) // between 0 and 3
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour)
  console.log("Game pattern: " + gamePattern)

  setTimeout(function () {
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)
  }, 200)

  playSound(randomChosenColour);
}

function updateLevelTitle() {
  $("#level-title").text("Level " + level)
}

function playSound(buttonID) {
  var soundFileUrl = "sounds/" + buttonID + ".mp3"
  var audio = new Audio(soundFileUrl)
  audio.play()
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed")

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed")
  }, 100)
}

function areArraysEqual(array1, array2) {
  return JSON.stringify(array1) == JSON.stringify(array2)
}
