// console.log(words);
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

//Word selector array --can break into an array with objects so can add images to each object. But how?
var words = [
{	word:"hermione",
	image: "assets/images/hermione.jpg",
}, 
{	word:"harry",
	image:"assets/images/harry.jpg"
}, 
{	word:"ron",
	image:"assets/images/ron.jpg"
}, 
{	word:"snape",
	image:"assets/images/snape.jpg"
}, 
{	word:"draco",
	image:"assets/images/draco.jpg"
},
{	word:"dumbledore",
	image:"assets/images/dumbledore.jpg"
},
{	word:"voldemort",
	image:"assets/images/voldemort.gif"
}, 
{	word:"muggles",
	image:"assets/images/dursleys.jpg"
}, 
{	word:"horcrux",
	image:"assets/images/horcrux.jpg"
},
{	word:"elder wand",
	image:"assets/images/elderwand.jpg"
}, 
{	word:"alohomora",
	image:"assets/images/alohomora.png"
}, 
{	word:"avada kedavra",
	image:"assets/images/avadakedavra.jpg"
}];
// console.log(words);

var index = Math.floor(Math.random()*words.length);
var word = words[index].word;
var image = words[index].image;

console.log('word: ', word);

//creating answer array for blanks
var answer = [];

for (var i=0; i<word.length; i++){
	if(word[i]===" ") {
	answer.push(" ");
	}else {
		answer.push("-");
	}
}

//Trying to use document.getElementByID to call the currentWord and then should do a fn to document.create...something method
document.getElementById('currentWord').innerHTML= answer.join("");
// console.log("answer:", answer);


//stored guesses 
var guesses = [];

//Guesses remaining 
var guessesRemaining = 6;
document.getElementById("guessesRemaining").innerHTML=guessesRemaining;


//Win Points counter 
var winPoints = 0;
document.getElementById("winPoints").innerHTML=winPoints; 

var keepPlaying; 




//This function is run whenever the user presses a key.
document.onkeyup = function(event){

/* word.indexOf(event.key)!==1 means that the event.key (guess) is in 
the word, it does not equal -1. thus it is in the word
and indexOf should give me the index of the letter guessed?
Not sure how to help computer figue out where in the answer 
to replace the letters*/
	if (event.keyCode >= 65 && event.keyCode <= 90) {

		var letter = String.fromCharCode(event.keyCode).toLowerCase();
		console.log(letter);

		if (letter) {


			if (word.indexOf(letter) > -1) {
			//answer[/*a number that represents where the event key is*/]
		 	//answer.indexOf(event.key) is the index of the key	
		 	/*write a for loop with an if stmnt saying that it should
			check for the key pressed to be inside that word & if it is
			then replace the answer variable starting at index 0 to the key pressed
			*/
		 	
					for (var i = 0; i< word.length; i++) {
			 			
			 			if (letter === word[i]) {
			 				answer[i] = letter;
			 				document.getElementById("currentWord").innerHTML=answer.join("");
			 				console.log("answer:", answer);
			 			}
			 		}
			 		
			 		if(answer.indexOf("-") === -1) {
			 			
			 			winPoints++;
			 			document.getElementById("winPoints").innerHTML=winPoints;
			 			
			 			document.getElementById("myImg").src = image;

			 			setTimeout(function(){  
			 			  keepPlaying = confirm("Congrats You Won: Do you want to keep playing? ");
			 			 	if(keepPlaying){
							reset(true);
			 			 }}, 2000);	 
			 		}

		 				
			 	}else {
			 		if(guesses.indexOf(letter)===-1) {
			 			guessesRemaining--;
			 			console.log(guessesRemaining);
			 			document.getElementById("guessesRemaining").innerHTML=guessesRemaining;
			 			guesses.push(letter);
			 			document.getElementById("lettersGuessed").innerHTML=guesses;
			 			if (guessesRemaining===0) {
			 				setTimeout(function(){ 	
			 				keepPlaying = confirm("You lose: Want to try again?");
			 					if(keepPlaying){
									reset(false);
			 					}}, 2000);
			 			}
			 		}	
				}
		}
	}
};

/*using parameters i.e.setting var didWin inside the fn 
is really helpful for calling it inside the fn with an if/else 
and then saying true or false above when calling reset fn to follow
if didWin and else didn't win  */
function reset(didWin) {

console.log(didWin);

index = Math.floor(Math.random()*words.length);
word = words[index].word;
image = words[index].image;
console.log("word:", word);


answer = [];

for (var i=0; i<word.length; i++){
	if(word[i]===" ") {
	answer.push(" ");
	}else {
		answer.push("-");
	}
}
document.getElementById('currentWord').innerHTML= answer.join("");

if (didWin) {
}else {winPoints = 0;
document.getElementById("winPoints").innerHTML=winPoints;
}

guesses = [];

guessesRemaining = 6;
document.getElementById("guessesRemaining").innerHTML=guessesRemaining;
document.getElementById("lettersGuessed").innerHTML=guesses;
document.getElementById("myImg").src="assets/images/harrypotterlogo.png";
}





