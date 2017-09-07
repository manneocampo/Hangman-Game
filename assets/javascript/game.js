console.log(words);
/*Program needs to do: 
1. pick a random word. 
2. Take the player's guess. 
3. Quit the game if the player wants to. 
4. Check that the player's guess is a valid letter. 
5. Keep track of letters the player has guessed. 
6. Show the player their progress. 
7. Finish when the player has guessed the word. 
8. After player wins/loses the game should automatically choose another word and make the user play it. 

2-6 need to happen over and over so those should be loops. 
*/

/*Pseudocode the game:
Pick a random word 
While the word has not been guessed {
	Show the player their current progress 
	Get a guess from the player 
If the player wants to quit the game {
Quit the game 
}
Else if the guess is not a single letter {
	Tell the player to pick a single letter
}
Else {
	If the guess is in the word {
	Update the player's progress with the guess
	}
}
Congratulate player on guessing the word 
*/

//Word selector array 
var words = ["hermione", "harry", "ron", "snape", "draco","dumbledore","voldemort", "muggles", "horcrux", "elder wand", "alohomora", "avada kedavra"];
console.log(words);


var word = words[Math.floor(Math.random()*words.length)];



//creating answer array for blanks
var answer = [];

for (var i=0; i<word.length; i++){
	answer.push("-");
}
//keeps track of how many letters are left to be guessed
var remainingLetters=word.length;


//Trying to use document.getElementByID to call the currentWord and then should do a fn to document.create...something method
document.getElementById('currentWord').innerHTML= answer.join("");
console.log('currentWord');

//Making some test logs.
console.log("Hermione");
console.log(words[11]);

//Looping through each item in the array to create current word 
//and logging a message to the console. 
for (var i=0; i < words.length; i++) {
	console.log("Word Selected is..." + words[i]);
}

//guess
var guess; 

//stored guesses 
var guesses = [];

//Guesses remaining 
var guessesRemaining;

//Win Points counter 
var winPoints; 

//When any letter is clicked 
// var lettersGuessed = document.getElementById("lettersGuessed"); 

//This function is run whenever the user presses a key.
document.onkeyup = function(event){
	 answer[0]="e";
	 console.log("answer:", answer);
	 document.getElementById('currentWord').innerHTML=answer.join("");

// Determines which key was pressed.	
	var guess = event.key;
	console.log(guess); 
/*still need to figure this part out...trying to replace 
the spots in the word with the guesses that are correct*/

/* word.indexOf(event.key)!==1 means that the event.key (guess) is in 
the word, it does not equal -1. thus it is in the word
and indexOf should give me the index of the letter guessed?
Not sure how to help computer figue out where in the answer 
to replace the letters*/
if (word.indexOf(event.key)!==1) {
 		answer[i=0, i< words.length,i++] = event.key;
 		console.log(word);
 		
 	}
 };





