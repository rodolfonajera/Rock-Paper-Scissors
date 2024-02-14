//First Javascript project. At this point will only run in console.
function getComputerChoice() {
    let computerChoice;
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case (1):
            computerChoice = "rock";
            alert("Computer chose rock");
            break;
        case (2):
            computerChoice = "paper";
            alert("Computer chose paper");
            break;
        case (3):
            computerChoice = "scissors";
            alert("Computer chose scissors");
            break;
    }
    return computerChoice;
}
function getPlayerChoice() {

    let playerChoice = prompt("ROCK PAPER SCISSORS?");
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === "rock") {
        alert("you chose rock");
        return playerChoice;
    }
    else if (playerChoice === "paper") {
        alert("you chose paper");
        return playerChoice;
    }
    else if (playerChoice === "scissors") {
        alert("you chose scissors");
        return playerChoice;
    }
    else {
        alert("ERROR!")
        getPlayerChoice(); // repeats function
    }

}
function playRound(playerSelection, computerSelection) {
    console.log("Player chose: " + playerSelection);
    console.log("Computer chose: " + computerSelection);
    let results;
    if (playerSelection===computerSelection){
        alert("TIE!")
        results = "TIE!";
    }
    else if (playerSelection === "rock" && computerSelection === "paper")
    {
        alert("You lose: " + computerSelection + " beats " + playerSelection);
        results = ("You lose: " + computerSelection + " beats " + playerSelection);
    }
    else if (playerSelection === "rock" && computerSelection === "scissors")
    {
        alert("You win: " + playerSelection + " beats " + computerSelection);
        results = ("You win: " + playerSelection + " beats " + computerSelection);
    }
    else if (playerSelection === "paper" && computerSelection === "scissors")
    {
        alert("You lose: " + computerSelection + " beats " + playerSelection);
        results = ("You lose: " + computerSelection + " beats " + playerSelection);
    }
    else if (playerSelection === "paper" && computerSelection === "rock")
    {
        alert("You win: " + playerSelection + " beats " + computerSelection);
        results = ("You win: " + playerSelection + " beats " + computerSelection);
    }
    else if (playerSelection === "scissors" && computerSelection === "rock")
    {
        alert("You lose: " + computerSelection + " beats " + playerSelection);
        results = ("You lose: " + computerSelection + " beats " + playerSelection);
    }
    else if (playerSelection === "scissors" && computerSelection === "paper")
    {
        alert("You win: " + playerSelection + " beats " + computerSelection);
        results = ("You win: " + playerSelection + " beats " + computerSelection);
    }
    else{
        alert("ERROR!")
    }
    return results;
}
let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();
let results = playRound(playerChoice, computerChoice);
console.log(results);



