
$(document).ready(function(){

	var COMPUTER_CHOICE = null;
	var NUM_GUESSES = null;

	
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
    $("#guessButton").click(function(){

    	console.log("guess button down");
    	
    	var guess = $('#userGuess').val();
    	
    	// make sure guess is a whole number and within 1-100
    	if (guess != null && ((guess % 1)==0) && (guess > 0 && guess < 101))
    	{
    		NUM_GUESSES++; 
    		
    		$("#count").val("10");
    		console.log("guess is " + guess);
    		compareGuess (guess);
    	}
    	else
    	{
    		console.log ("invalid guess"); 
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
	** get random computer guess
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
		console.log ("entering checkGuess w/ guess: " + guess + " computer choice is " + COMPUTER_CHOICE); 

		var diff = COMPUTER_CHOICE - guess;
		if (0 === diff)
		{
			console.log ("CORRECT!"); 
		}
		else if (diff < 10)
		{
			console.log ("hot: " + diff); 
		}
		else if (diff < 20)
		{
			console.log ("warm: " + diff);
		}
		else if (diff < 30)
		{
			console.log ("cool: " + diff);
		}
		else if (diff < 40)
		{
			console.log ("cold: " + diff);
		}
		else
		{
			console.log ("very cold: " + diff);

		}


	}

	/*
	** start new game
	*/
	function startNewGame()
	{
		COMPUTER_CHOICE = randomComputerChoice();
		console.log ("starting new game; computer choice is: " + COMPUTER_CHOICE); 

		NUM_GUESSES = 0; 

	}


});


