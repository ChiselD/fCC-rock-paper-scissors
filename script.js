const playerScoreText = document.querySelector("#player-score-value");
const computerScoreText = document.querySelector("#computer-score-value");

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const results = document.querySelector("#results-text");
const playAgainButton = document.querySelector("#play-again");

const choices = ["Rock", "Paper", "Scissors"];

let playerScore = 0;
let computerScore = 0;
let winner = null;

function restartGame() {
	playerScore = 0;
	playerScoreText.innerText = playerScore;
	computerScore = 0;
	computerScoreText.innerText = computerScore;
	results.innerText = "";
	playAgainButton.classList.add("hidden");
	rockButton.classList.remove("hidden");
	paperButton.classList.remove("hidden");
	scissorsButton.classList.remove("hidden");
}

function gameOver(winner) {
	results.innerHTML += `<p>${winner} has won the game!</p>`;
	playAgainButton.classList.remove("hidden");
	rockButton.classList.add("hidden");
	paperButton.classList.add("hidden");
	scissorsButton.classList.add("hidden");
}

function checkIfGameOver() {
	if (playerScore >= 3) {
		gameOver("Player");
		return;
	}
	if (computerScore >= 3) {
		gameOver("Computer");
		return;
	}
}

function playerWins(winningChoice, losingChoice) {
	playerScore++;
	playerScoreText.innerText = playerScore;
	results.innerText = `Player wins! ${winningChoice} beats ${losingChoice}.`;
	checkIfGameOver();
}

function computerWins(winningChoice, losingChoice) {
	computerScore++;
	computerScoreText.innerText = computerScore;
	results.innerText = `Computer wins! ${winningChoice} beats ${losingChoice}.`;
	checkIfGameOver();
}

function determineWinner(playerChoice, computerChoice) {
	if (playerChoice == computerChoice) {
		results.innerText = `It's a tie! Both chose ${playerChoice}.`;
		return 0;
	}
	if (playerChoice === "Rock") {
		if (computerChoice === "Paper") {
			computerWins(computerChoice, playerChoice);
		} else {
			playerWins(playerChoice, computerChoice);
		}
	}
	if (playerChoice === "Paper") {
		if (computerChoice === "Scissors") {
			computerWins(computerChoice, playerChoice);
		} else {
			playerWins(playerChoice, computerChoice);
		}
	}
	if (playerChoice === "Scissors") {
		if (computerChoice === "Rock") {
			computerWins(computerChoice, playerChoice);
		} else {
			playerWins(playerChoice, computerChoice);
		}
	}
	return 0;
}

function playerChoosesRock() {
	let playerChoice = "Rock";
	let computerChoice = choices[Math.floor(Math.random() * 3)];
	console.log(`computerChoice is: ${computerChoice}`);
	return determineWinner(playerChoice, computerChoice);
}

function playerChoosesPaper() {
	let playerChoice = "Paper";
	let computerChoice = choices[Math.floor(Math.random() * 3)];
	console.log(`computerChoice is: ${computerChoice}`);
	return determineWinner(playerChoice, computerChoice);
}

function playerChoosesScissors() {
	let playerChoice = "Scissors";
	let computerChoice = choices[Math.floor(Math.random() * 3)];
	console.log(`computerChoice is: ${computerChoice}`);
	return determineWinner(playerChoice, computerChoice);
}

rockButton.addEventListener("click", playerChoosesRock);
paperButton.addEventListener("click", playerChoosesPaper);
scissorsButton.addEventListener("click", playerChoosesScissors);

playAgainButton.addEventListener("click", restartGame);

