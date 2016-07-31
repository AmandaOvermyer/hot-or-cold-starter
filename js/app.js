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
  $("#userGuess").focus();
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

function checkUserChoice(){
  var userChoice = $("#userGuess").val(); 
  var isInt = parseInt(userChoice);
  if  (!isInt || (userChoice < 1 || userChoice > 100)){
    addFeedback ("Please choose a number between 1 and 100");
    $("#userGuess").val("");    
  } else {
     $("#guessList").append("<li>" + userChoice + "</li>");
    checkGuess(userChoice);
    updateCounter();
    $("#userGuess").val("");
  }
}


setFocus();

computerNumber();

$(".guess-number").submit(function(event) {
  event.preventDefault();
  checkUserChoice();
}) 



function checkGuess(userGuess) {
  var distance = Math.abs(secretNumber - userGuess);
  if (distance === 0) {
    var startNewGame = confirm("Wow, you got it right! Click button to start new game.");
    if (startNewGame){
      newGame();
    }
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
function newGame2(){
  guesscount = -1;
  updateCounter();
  $("#userGuess").val("");
  $("#guessList").html("");
  addFeedback("Make your Guess");
}


function newGame() {
  location.reload();
  setFocus();
}

$(".new").click(newGame2);

})


