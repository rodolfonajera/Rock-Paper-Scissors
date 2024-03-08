const rockBtn = document.querySelector('#rockButton');
const paperBtn = document.querySelector('#paperButton');
const scissorsBtn = document.querySelector('#scissorsButton');
const resultsDiv = document.querySelector('#resultsDiv');
const playerDiv = document.querySelector('#playerDiv');
const computerDiv = document.querySelector('#computerDiv');


function getComputerChoice() {
    let computerChoice;
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case (1):
            computerChoice = "rock";
            break;
        case (2):
            computerChoice = "paper";
            break;
        case (3):
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}
function getPlayerChoice() {

    game++;
    console.log("Game #: " + game);
    let playerChoice = prompt("GAME#" + game + "/5 ROCK PAPER SCISSORS?");
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === "rock") {
        return playerChoice;
    }
    else if (playerChoice === "paper") {
        return playerChoice;
    }
    else if (playerChoice === "scissors") {
        return playerChoice;
    }
    else {
        alert("ERROR!")
        getPlayerChoice(); // repeats function
    }

}
function getResults(playerSelection, computerSelection) {
    console.log("Player chose: " + playerSelection);
    console.log("Computer chose: " + computerSelection);
    let results;
    if (playerSelection === computerSelection) {
        results = "TIE!";
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        results = ("You lose: " + computerSelection + " beats " + playerSelection);
        computerWon++;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        results = ("You win: " + playerSelection + " beats " + computerSelection);
        playerWon++;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        results = ("You lose: " + computerSelection + " beats " + playerSelection);
        computerWon++;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        results = ("You win: " + playerSelection + " beats " + computerSelection);
        playerWon++;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        results = ("You lose: " + computerSelection + " beats " + playerSelection);
        computerWon++;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        results = ("You win: " + playerSelection + " beats " + computerSelection);
        playerWon++;
    }
    else {
        alert("ERROR!")
    }

    return results;
}
function playRound(playerChoice)
{
    playerDiv.textContent = playerChoice;
    let computerChoice = getComputerChoice();
    computerDiv.textContent = computerChoice;
    let results = getResults(playerChoice, computerChoice);
    console.log(results);
    resultsDiv.textContent= results;
}
function playGame() {
    let playerChoice = "";
    
    rockBtn.addEventListener('click', () => {
        playerChoice = "rock";
        playRound(playerChoice);
    });
    paperBtn.addEventListener('click', () => {
        playerChoice = "paper";
        playRound(playerChoice);
    });
    scissorsBtn.addEventListener('click', () => {
        playerChoice = "scissors";
        playRound(playerChoice);
    });

    /*
       if (playerWon === computerWon){
           {
               alert("TIE!")
               console.log("TIE! " + playerWon + " : " + computerWon);
           }
       }
       else if(playerWon > computerWon){
           alert("Player Won: " + playerWon + " : " + computerWon);
           console.log("Final Results- Player Won " + playerWon + " : " + computerWon);
       }
       else if (computerWon > playerWon){
           alert("Computer Won: " + computerWon + " : " + playerWon);
           console.log("Final Results- Computer Won: " + computerWon + " : " + playerWon);
       }
       */
}

playerWon = 0; //global counter variables
computerWon = 0;
game = 0;
playGame(); // Start of Game