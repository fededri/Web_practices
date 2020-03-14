var randomNumber1 = Math.floor((Math.random() * 6) + 1)


var imageFileName1 = "dice" + randomNumber1 + ".png"
document.querySelector(".img1").setAttribute("src", "images/" + imageFileName1)

//Second dice
var randomNumber2 = Math.floor((Math.random() * 6) + 1)

var imageFileName2 = "dice" + randomNumber2 + ".png"
document.querySelector(".img2").setAttribute("src", "images/" + imageFileName2)

var winnerString = ""

if (randomNumber1 > randomNumber2){
   winnerString = "Player 1 Wins!"
} else if (randomNumber2 > randomNumber1){
  winnerString = "Player 2 Wins!"
} else {
   winnerString = "Draw!"
}

document.querySelector("h1").innerText = winnerString
