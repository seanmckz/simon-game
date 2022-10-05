var userClickedPattern = []


var gamePattern = []
gamePattern.push(randomChosenColor)


function nextSequence(){
   return randomNumber = Math.floor(Math.random()*4)

}

var buttonsColors = ["red", "green", "blue", "yellow"]
var randomChosenColor = buttonsColors[nextSequence()]

// Concatenating string for button Key Selection
var key = "#" + randomChosenColor
$(key).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200)

$(".btn").on("click", function(){
   var userChosenColor = this.id
   userClickedPattern.push(userChosenColor)
   console.log(userClickedPattern)

   switch (this.id) {
      case "red":
         var red = new Audio("sounds/red.mp3")
         red.play()
         break;
   
      case "green":
         var green = new Audio("sounds/green.mp3")
         green.play()
         break;
   
      case "blue":
         var blue = new Audio("sounds/blue.mp3")
         blue.play()
         break;
   
      case "yellow":
         var yellow = new Audio("sounds/yellow.mp3")
         yellow.play()
         break;
   
      default:
         break;
   }

})



// $("#green").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200)