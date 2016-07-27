<<<<<<< HEAD
$(document).ready(function(){

 /*--- Display information modal box ---*/
 $(".what").click(function(){
   $(".overlay").fadeIn(1000);

 });

 /*--- Hide information modal box ---*/
 $("a.close").click(function(){
  $(".overlay").fadeOut(1000);
});


 var secretNumber;
 var guesscount = 0;

 function setFocus() {
  document.getElementById("userGuess").focus();
}

var computerNumber = function(){
  secretNumber = Math.floor((Math.random() * 100) + 1);
}

var addFeedback = function(feedback) {
  $("#feedback").text(feedback);
}

var updateCounter = function() {
  guesscount = guesscount + 1;
  $("#count").text(guesscount);
}

/*function checkUserChoice(userChoice){
    if(!userChoice % 1 == 0) {
      addFeedback ("Please enter a valid number");
    }
    if(userChoice < 0 || userChoice > 101){
      addFeedback ("Please choose a number between 1 and 100");    
    }
  }
*/

window.onload = setFocus();

computerNumber();

$(".guess-number").submit(function(event) {
  event.preventDefault();
  var userChoice = $("#userGuess").val(); 
  checkUserChoice();
$("#guessList").append("<li>" + userChoice + "</li>");
  checkGuess(userChoice);
  updateCounter();
  $("#userGuess").val("");
}) 



function checkGuess(userGuess) {
  distance = Math.abs(secretNumber - userGuess);
  if (distance === 0) {
    confirm("Wow, you got it right! Click button to start new game.");
    newGame();
  } else if (distance >= 50) {
    addFeedback ("Ice Cold");
  } else if (distance > 30 && distance < 50){
    addFeedback ("Cold");
  } else if (distance > 20 && distance < 30){
    addFeedback ("Warm")
  } else if (distance > 10 && distance <20){
    addFeedback ("Hot")
  } else {
    addFeedback ("Very Hot");
  }
}



function newGame() {
  location.reload();
  setFocus();
}

$(".new").click(newGame);

})


=======

$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


>>>>>>> f6c17cf8523d290e85a5b33a658c231efae133ac
