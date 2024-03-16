var n = document.querySelectorAll(".drum").length;
for (var i = 0; i < n; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var mouseclick = this.innerHTML;
    makesound(mouseclick);
    create_animation(mouseclick);
  });
}

document.addEventListener("keypress", function(event){
  makesound(event.key);
  create_animation(event.key);
});



function makesound(key){
  switch (key) {
    case "a":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "f":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      console.log(key);
      break;
  }
}


function create_animation(activekey){
  var activeButton = document.querySelector("."+activekey);

  activeButton.classList.add("pressed");

  setTimeout(function(){ activeButton.classList.remove("pressed")}, 100);
}

// function removeShadow(event){
//   activeButton.classList.remove("pressed");
// }