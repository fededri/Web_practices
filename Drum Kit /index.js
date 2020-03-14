var buttons = document.querySelectorAll(".drum")

for (var i = 0; i < buttons.length ; i++){
  var button = buttons[i]
  button.addEventListener("click", function (){
    var buttonInnerHTML = this.innerHTML;
    playCorrectSound(this.innerHTML)
    buttonAnimation(this.innerHTML)
  })
}


document.addEventListener("keydown",function(event){
  playCorrectSound(event.key)
  buttonAnimation(event.key)
})

function playCorrectSound(param){
  var audio = null
  switch (param) {
    case "w":
         audio = new Audio("sounds/tom-1.mp3")
      break;

    case "a":
         audio = new Audio("sounds/tom-2.mp3")
    break;

    case "s":
         audio = new Audio("sounds/tom-3.mp3")
      break;

      case "d":
          audio = new Audio("sounds/tom-4.mp3")
        break;

    case "j":
      audio = new Audio("sounds/snare.mp3")
      break;


    case "k":
      audio = new Audio("sounds/crash.mp3")
      break;

      case "l":
        audio = new Audio("sounds/kick-bass.mp3")
        break;

    default:
      console.log("Default case")
  }
  audio.play()
}


function buttonAnimation(key){
  var activeButton = document.querySelector("." + key)
  activeButton.classList.add("pressed")

  setTimeout(function(){
    activeButton.classList.remove("pressed")
  } , 100)
}
