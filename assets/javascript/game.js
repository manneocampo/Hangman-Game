//Word selector array 
var words = ["hermione", "harry", "ron", "snape", "draco","dumbledore","voldemort", "muggles", "horcrux", "elder wand", "alohomora", "avada kedavra"];

var word = words[Math.floor(Math.random()*words.length)];

var answerArray = [];

for (var i=0; i<word.length; i++){
	answerArray[i]="_";
}
var remainingLetters=word.length;

//Making some test logs.
console.log("Hermione");
console.log(words[11]);

//Looping through each item in the array to create current word 
//and logging a message to the console. 
// for (var i=0; i < words.length; i++) {
// 	console.log("Word Selected is..." + words[i]);
// }

//guess
var guess; 

//stored guesses 
var guesses = [];

//Guesses remaining 
var guessesRemaining;

//Win Points counter 
var winPoints; 

//When any letter is clicked 
var lettersGuessed = document.getElementById("lettersGuessed"); 

document.onKeyUp = function(event){
	lettersGuessed.textContent = event.key; 
};



