const CHOICES = ["rock", "paper", "scissors"];
const WIN_SCORE = 5;

let playerScore = 0;
let computerScore = 0;
let gameOver = false;

const buttons = document.querySelectorAll(".choice-button");
const resultDiv = document.getElementById("result");
const computerChoiceDiv = document.getElementById("computer-choice");
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const restartBtn = document.getElementById("restart");

function getComputerChoice() {
  const index = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[index];
}

function decideWinner(player, computer) {
  if (player === computer) return "draw";

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "player";
  }

  return "computer";
}

function updateScore(winner) {
  if (winner === "player") playerScore++;
  if (winner === "computer") computerScore++;
}

function checkGameOver() {
  return playerScore === WIN_SCORE || computerScore === WIN_SCORE;
}

function renderUI(computerChoice, winner) {
  computerChoiceDiv.textContent = `Computer chose ${computerChoice}`;
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;

  if (winner === "draw") {
    resultDiv.textContent = "It's a draw";
  } else if (winner === "player") {
    resultDiv.textContent = "You win this round";
  } else {
    resultDiv.textContent = "You lose this round";
  }
}

function endGame() {
  gameOver = true;
  buttons.forEach(btn => btn.disabled = true);

  resultDiv.textContent =
    playerScore === WIN_SCORE ? "You won the game 🎉" : "Computer wins 💀";

  restartBtn.classList.remove("hidden");
}


buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (gameOver) return;

    const playerChoice = button.id;
    const computerChoice = getComputerChoice();
    const winner = decideWinner(playerChoice, computerChoice);

    updateScore(winner);
    renderUI(computerChoice, winner);

    if (checkGameOver()) {
      endGame();
    }
  });
});

restartBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  gameOver = false;

  playerScoreSpan.textContent = 0;
  computerScoreSpan.textContent = 0;
  resultDiv.textContent = "Make your move";
  computerChoiceDiv.textContent = "Computer is thinking...";

  buttons.forEach(btn => btn.disabled = false);
  restartBtn.classList.add("hidden");
});

