let playerWins = 0;
let computerWins = 0;

function getComputerChoice(){
    var choice = Math.floor(Math.random() * 3);
    if (choice === 0){
        return "rock";
    } else if (choice === 1){
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){

    if (playerSelection === computerSelection){
        return "*****Tie game!*****";
    } else if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            computerWins = computerWins + 1;
            return "*****Computer wins!*****";  
        } else {
            playerWins = playerWins + 1;
            return "*****Player wins!*****";
        }
    } else if (playerSelection === "paper"){
        if (computerSelection === "scissors"){
            computerWins = computerWins + 1;
            return "*****Computer wins!*****";
        } else {
            playerWins = playerWins + 1;
            return "*****Player wins!*****";
        }
    } else if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            computerWins = computerWins + 1;
            return "*****Computer wins!*****";
        } else {
            playerWins = playerWins + 1;
            return "*****Player wins!*****";
        }
    }
}
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function game(){
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("rock, paper, or scissors?");
        let computerSelection = getComputerChoice();
        console.log("Player: " + playerSelection);
        console.log("Computer: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("Current Score -> " + "Player: " + playerWins, "Computer: " + computerWins);
    }
    
    if (playerWins > computerWins){
        console.log("\~\*\~\*\~\*\~\*\~\*\~Game Over, Player wins!\~\*\~\*\~\*\~\*\~\*\~");
    } else if (playerWins < computerWins){
        console.log("\~\*\~\*\~\*\~\*\~\*\~Game Over, Computer wins!\~\*\~\*\~\*\~\*\~\*\~");
    }else {
        console.log("\~\*\~\*\~\*\~\*\~\*\~Game Over, Tie game!\~\*\~\*\~\*\~\*\~\*\~");
    }
}
game();