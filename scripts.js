//First Javascript project. At this point will only run in console.
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
    }
    return computerChoice;
}
function getPlayerChoice() {

    let playerChoice = prompt("ROCK PAPER SCISSORS?");
    playerChoice = playerChoice.toLocaleLowerCase();
    if (playerChoice === "rock") {
        alert("you chose rock");
    }
    else if (playerChoice === "paper") {
        alert("you chose paper");
    }
    else if (playerChoice === "scissors") {
        alert("you chose scissors");
    }
    else{
        warning("Error");
    }
    return playerChoice;
}

//function playRound(playerSelection, computerSelection) {}

let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();
alert("Player chose: " + playerChoice);
alert("Computer chose: " + computerChoice);


