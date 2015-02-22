
$(document).ready(function(){

	var COMPUTER_CHOICE = null;
	var NUM_GUESSES = null;
	var GAME_OVER = false;

	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*
    ** guess button pressed; get guess from text field
    */
    $("#guessButton").click(function(event){

    	// call preventDefault method so the onload method is not called again
    	// Thanks Daniel!!
    	event.preventDefault();

    	console.log("guess button down");

    	if (null === COMPUTER_CHOICE)
    	{
    		alert ("Please press new game button to get started"); 
    		return; 
    	}

    	if (GAME_OVER)
    	{
    		startNewGame();
    	}
    	
    	var guess = $('#userGuess').val();
    	
    	// make sure guess is a whole number and within 1-100
    	if (guess != null && ((guess % 1)==0) && (guess > 0 && guess < 101))
    	{
    		NUM_GUESSES++; 
    		
    		$("#count").text(NUM_GUESSES);

    		console.log("num guess is " + NUM_GUESSES);
    		console.log("guess is " + guess);

    		// add guess to guess list
    		$("#guessList").append("<li>" + guess + "</li>");

    		compareGuess (guess);
    	}
    	else
    	{
    		alert("invalid guess. Please enter a whole number betwee 1 and 100"); 
    	}
    	
	});


	/*
    ** new game button pressed
    */
    $('.new').mousedown(function() {

    	console.log("new game button down");
    	startNewGame();
    	
	});

	/*
	** get computer's choice at random
	*/
	function randomComputerChoice ()
	{
    
    	var random = (Math.round (Math.random() * 99)) + 1;
    	return (random);
	}

	/*
	** process user's guess
	*/
	function compareGuess(guess)
	{
		console.log ("entering checkGuess");
		console.log ("guess number: " + NUM_GUESSES + " guess: " + guess + " computer choice is " + COMPUTER_CHOICE); 

		// get the absolute value difference between the user's guess and computer's random choice
		var diff = Math.abs(COMPUTER_CHOICE - guess);

		var feedback = null;

		if (0 === diff)
		{
			feedback = guess + " is CORRECT! You got it on " + NUM_GUESSES + " guesses."; 
			GAME_OVER = true;
		}
		else if (diff < 5)
		{
			feedback = "You are VERY HOT";
		}
		else if (diff < 10)
		{
			feedback = "You are HOT";
		}
		else if (diff < 20)
		{
			feedback = "You are Warm";
		}
		else if (diff < 30)
		{
			feedback = "You are cool";
		}
		else if (diff < 40)
		{
			feedback = "You are cold";
		}
		else 
		{
			feedback = "You are ICE COLD";
		}
		
		console.log (feedback); 
		// alert (feedback);
		$("#feedback").text(feedback);


	}

	/*
	** start new game
	*/
	function startNewGame()
	{
		COMPUTER_CHOICE = randomComputerChoice();
		console.log ("starting new game; computer choice is: " + COMPUTER_CHOICE); 

		NUM_GUESSES = 0; 
		GAME_OVER = false;

		$("#count").text(NUM_GUESSES);
		$("#feedback").text("Make your guess!");

		$("#userGuess").val("Enter your guess!");

		// clear previous game guess list if any
		$("ul.guessBox li").remove();

	}

	/*
    ** clear text entry to get reay for new user guess
    */
    $('#userGuess').mouseenter(function() {

    	console.log ("user guess mouse enter");
    	$("#userGuess").val("");
    	
	});


});


