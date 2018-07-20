// Creating a secretNumber
var secretNumber = 7;

// Asking user to guess
var guess = Number(prompt("Guess the number!"));

// Checking the guess
if(guess===secretNumber){
	alert("You got it right");
}
// checking whether the guess was too high or too low
else if(guess>secretNumber){
	alert("Too high. Guess Again");
}
else{
	alert("Too Low. Guess again!");
}