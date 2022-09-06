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

function playRound() {
  let playerSelection = prompt("Select Rock, Paper or Scissor: ").toLowerCase();
  let computerSelection = getComputerChoice();

  if (playerSelection == computerSelection) {
    return "Draw";
  }
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "Player Wins!";
  } else return "Computer Wins!";
}

//make a new function to play 5 rounds and keeps score and then reports a winner or loser at the end.
function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let result = playRound();

    if (result === "Draw") {
      playerScore++;
      computerScore++;
      console.log(`Player: ${playerScore}`, `Computer: ${computerScore}`);
    } else if (result === "Player Wins!") {
      playerScore++;
      console.log(`Player: ${playerScore}`, `Computer: ${computerScore}`);
    } else {
      computerScore++;
      console.log(`Player: ${playerScore}`, `Computer: ${computerScore}`);
    }
  }
  if (playerScore > computerScore) console.log("Player Wins!");
  else if (playerScore < computerScore) console.log("Computer Wins!");
  else console.log("It's a Draw!");
}
