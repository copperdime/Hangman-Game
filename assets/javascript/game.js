/* Hangman game pseudocode:

1. Need to generate a random word for user to guess:
	1a. Either use a random code (find online) or store values in an array or if you want to do by category
		use a random code to select a value stored in an object as a key-value pair.
		
		//Stored in an array (most random words, unrelating)
		Example: var words = ["pretty", "orange", "balloon", "hungry", "snacking", "purple", "ocean", "feminine", "precious"];
		random code will then select an index value using math.random

		var rand = select[Math.floor(Math.random() * select.length)]; */

		// Introduce variables and arrays
		var wins = 0;
		var losses = 0;
		var maxLoss = 9;
		var totalGuesses = 0;
		var gotLetter = false;
		
		var words = ["People", "Unitedstates", "Union", "Establish", "Justice", "Secure",
					"Domestic", "Tranquility","provide", "common", "defense", "Promote",
					"general", "Welfare", "Blessings", "liberty", "ourselves",
					"prosperity", "ordain", "constitution", "America"];

		var randWord = words[Math.floor(Math.random()*words.length)].toLowerCase();
		var wordSplit = randWord.split("");

		var uniqueLetters = wordSplit.filter(function(item, i, ar){
			 		return ar.indexOf(item) === i; }).join('');

		var amountUnique = uniqueLetters.split("").length;


		document.onkeyup = function(event){
			 console.log(wordSplit);
			var chosenLetter = [event.key];
		    for (i = 0; i < wordSplit.length; i++){
    		// if the type and value at index of i is equal to the value pressed in the event
    			if(wordSplit[i] === event.key){
    				// add to wins counter + 1.
    				gotLetter = true;
    				wins === wins++;
    				// console.log("good");
    				console.log("wins = " + wins);
    				console.log("here's the letter you chose " + chosenLetter);

    				amountUnique = amountUnique - 1;
    				console.log("how many more letters to be determined: " + amountUnique);
    			}

    			else if (gotLetter === false) {
    				// add to losses counter +1.
    				losses === losses++;
    				// console.log("bad");
    				console.log("losses = " + losses);

    				amountUnique = amountUnique;
    				console.log("how many more letters to be determined: " + amountUnique);
    				
    			}
    		function score (gotLetter){
    			if (gotLetter){
    				
    				amountUnique === amountUnique--;
    		
    					if (amountUnique === 0){
    						console.log("You win! Great job!");
    					}
    					else {
    						console.log("Keep trying!");
    					}
    					
    			}
    					
    			else{
    				wins === wins;
    				console.log("wins didn't change = " + wins);
    				}
    		}		
    	}
    	// storing all key press values into an array
    			var chosenLetters;
				var all = new Array();
					chosenLetters = chosenLetter[i]
					    all[i] = chosenLetters;
					    chosenLetter++;
					    console.log("display chosen letters: " + all);
					}
		
		/* Use HTML to color letters opaque until key has been hit by user. 
		Once all letters opacity = 1, user wins.
		*/

		//Unique letter function found online:
		// var nonUnique = randWord;
		// var unique = nonUnique.split('')

			// wordSplit.filter(function(item, i, ar){
			//  return ar.indexOf(item) === i; }).join('');

		// function uniqueLetters() {
		// 	// increment through index values for all i
  //   		for (i = 0; i < wordSplit.length; i++){
  //   		// if the type and value at index of i is equal to any key values in the object letterVal_keyUp
  //   			if(wordSplit[i] === event.key){
  //   				// return the value of that key in the object
  //   				return letterVal_keyUp.key.value;
  //   			}
  //   			else{
  //   				return "x";
  //   			}
    			// var letter = wordSplit[i].toString();
    			// return letterVal_keyUp.letter;

    	// 	}
    	// }
    	// 	function unikeyCode(wordSplit) {
    	// 	// for (var i = 0; i < wordSplit.length; i++){
    	// 		return letterVal_keyUp.wordSplit;
    	// 		// i = i++;
    	// 	}
		// function uniqueTrialRun() {
		// 	// increment through index values for all i
  //   		for (i = 0; i < wordSplit.length; i++){
  //   		// if the type and value at index of i is equal to any key values in the object letterVal_keyUp
  //   			if(letterVal_keyUp.a)

  //   				wordSplit[i] === letterVal_keyUp.key){
  //   				// return the value of that key in the object
  //   				return letterVal_keyUp.key.value;
  //   			}
  //   			else{
  //   				return letterVal_keyUp.key;
  //   			}
			
		//}	// User presses a key
		    //document.onkeyup = function(event){
		    // console.log(event);
		    //var usersChoice = event.key;
		    //return(usersChoice);
			
			
		//}


		/*
		//Stored as key-value pair (by category)
		Example: var State {
			"California": "Los Angeles",
			"New York": "Albany",
			"Colorado": "Denver",
			"Mississippi": "Yazoo City",
			"Tennessee": "Nashville"
			"Washington": "Seattle"
		}
		Have several objects so the user will not crack the pattern

	2. Display the selected word as dashes. Number of dashes should be by word length, 
		which is determined by using index.length value of word +1.
		Example: the word "snacking" should have a word length of:
			for (counter = 0; counter < words[4].length +1 < counter++){
				counter = counter++;
			}

		Example: Los Angeles should have a wordlength of (State.California = "LosAngeles")
			for (counter = 0; counter < State["California"].length + 1; counter++){
					counter=counter++;
			}

	3. User interaction: Once user guesses a letter, it signals an event to the DOM
		that a key has been pressed. Use "event.key" to determine which key has been pressed:

			// User presses a key
		    document.onkeyup = function(event){
		    // console.log(event);
		    var usersChoice = event.key;
		    console.log(usersChoice);
			}
		Make sure to transfer all letters .toLowerCase() to compare letter values regardless of case.

	4. Use an if statement or a case/switch statement to compare values of letters to the chosen word.
		Search the word using a loop to determine if charAt(x) is equal to users event.key value.
		
	Before this loop you need to declare variables wins and losses; initialize to zero:
	var wins = 0;
	var losses = 0;


		for (i = 0; i < word[x].length; i++){
			if (charAt[i] === (event.key)){
				replace '-' with event.key;

				wins = wins++;
			i=i++;
			}
		}
		// if wins = 0 after loop has completed then,
		else { 
				losses=losses++;
		}
	
	5. Maximum loss value: If the user's guesses exceed max-loss value then they lose; else they win!
		var maxLoss = 9;

		if (maxLoss > 9){
		console.log("Sorry, you lose!");
		}
		else if (maxLoss < 9 && '-' = 0){
		console.log("You're a winner!");
		}

		
*/