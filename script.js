const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const playerMoveEl = document.getElementById('player-move');
const computerMoveEl = document.getElementById('computer-move');
const resultEl = document.getElementById('result');

let playerScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return 'tie';
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'win';
    }
    return 'lose';
}

function updateScore() {
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
}

function play(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    playerMoveEl.textContent = capitalizeFirst(playerChoice);
    computerMoveEl.textContent = capitalizeFirst(computerChoice);

    if (result === 'win') {
        resultEl.textContent = 'You win!';
        playerScore++;
    } else if (result === 'lose') {
        resultEl.textContent = 'Computer wins!';
        computerScore++;
    } else {
        resultEl.textContent = "It's a tie!";
    }

    updateScore();
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerMoveEl.textContent = '-';
    computerMoveEl.textContent = '-';
    resultEl.textContent = 'Choose your move!';
    updateScore();
}

function capitalizeFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
