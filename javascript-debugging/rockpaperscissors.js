let gameOver = false;
let computerChoices = ["rock", "paper", "scissors"];

function randomFrom(array) {
	return array[(Math.floor(Math.random()*3)) ];
}


function checkInput(input, computerChoices) {
	input = input.toLowerCase();
	
	if (input === "quit") {
		return true;
	}

	let computerChoice = randomFrom(computerChoices);

	if(computerChoice === "rock" && input === "scissors"){
		alert(`Computer wins with ${computerChoice}!`);
		return false;
	}else if (computerChoice === "scissors" && input === "paper"){
		alert(`Computer wins with ${computerChoice}!`);
		return false;
	}else if (computerChoice === "paper" && input === "rock"){
		alert(`Computer wins with ${computerChoice}!`);
		return false;
	}else if (computerChoice === input){
		alert(`It's a tie with ${computerChoice}!`);
		return false;
	}
	else{	
		alert(`Player wins with ${input}`)
		return true;
	}
}

function start(gameOver, computerChoices) {
	while (!gameOver){
		let playerInput = '';
		playerInput = prompt("Hi! Enter rock/paper/scissors to play, or quit to stop playing.");
		gameOver = checkInput(playerInput, computerChoices);
		//playerInput = "paper";
	} 
}



start(gameOver, computerChoices)  
