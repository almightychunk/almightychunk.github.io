//Letter choices available
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessedLetters = [];
var letterToGuess = null;



//Lets the computer select a random letter from the available choices
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

//"Lives" left
var updateGuessesLeft = function() {
  // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
  document.querySelector('#guess').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateAlreadyGuessed = function() {
  // Display letters already guessed
  document.querySelector('#alphaselect').innerHTML = "Letters already selected: " + guessedLetters.join(', ');
};
// Function will be called when we reset everything
var reset = function() {

  totalGuesses = 10;
  guessesLeft = 10;
  guessedLetters = [];

  updateGuessesLeft();
  updateLetterToGuess();
  updateAlreadyGuessed();

  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log(computerGuess);
}

updateLetterToGuess();
updateGuessesLeft();


//When key is released it becomes the users guess
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateAlreadyGuessed();

        if (guessesLeft > 0){
            if (userGuess === computerGuess){
                wins++;
                document.querySelector('#win').innerHTML = "Wins: " + wins;
                alert("Do you have ESPN?");
                reset();
            }
        }else if(guessesLeft == 0){
            losses++;
            document.querySelector('#loss').innerHTML = "Losses: " + losses;
            alert("Try again, Nostradamus");
            reset();
        }
};
