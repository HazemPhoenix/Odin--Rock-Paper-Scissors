const result = document.querySelector("#result");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const reset = document.querySelector("#reset");
let player = 0;
let computer = 0;

//Generate computer choice (rock, paper or scissors)
let getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3) + 1;
  if (choice === 1) {
    return "rock";
  }
  if (choice === 2) {
    return "paper";
  } else return "scissors";
};

//make a function that takes user selection and compares it with computer selection
//and then return the result, also use toLowerCase to make playerSelection parameter case
//insensitive

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();

  if (playerSelection == computerSelection) {
    result.textContent = "Draw!";
    player++;
    playerScore.textContent = player;
    computer++;
    computerScore.textContent = computer;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result.textContent = "Player Wins!";
    player++;
    playerScore.textContent = player;
  } else {
    result.textContent = "Computer Wins!";
    computer++;
    computerScore.textContent = computer;
  }
  if (player === 5) {
    result.textContent = "Player Wins the Game!!!";
    disable();
  } else if (computer === 5) {
    result.textContent = "Computer Wins the Game!!!";
    disable();
  }
}
function disable() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

rockBtn.addEventListener("click", () => {
  let playerSelection = "rock";
  playRound(playerSelection);
});
paperBtn.addEventListener("click", () => {
  let playerSelection = "paper";
  playRound(playerSelection);
});
scissorsBtn.addEventListener("click", () => {
  let playerSelection = "scissors";
  playRound(playerSelection);
});
reset.addEventListener("click", resetGame);
function resetGame() {
  result.textContent = "Result";
  player = 0;
  computer = 0;
  playerScore.textContent = "0";
  computerScore.textContent = "0";
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
}
