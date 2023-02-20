const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
}

function playGame(){
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorsBtn = document.querySelector('.scissors');
    const playerOptions = [rockBtn, paperBtn, scissorsBtn];
    const computerOptions = ['rock', 'paper', 'scissors'];

    playerOptions.forEach(option => {
        option.addEventListener('click', function(){
            const movesLeft = document.querySelector('.movesLeft');
            moves++;
            movesLeft.innerText = 'Moves Left: ${5 - moves}';

            const choiceNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[choiceNumber];
            winner(this.innerText, computerChoice);

            if (moves === 5){
                gameOver(plyerOptions, movesLeft);
            }
        })
    });
}
const winner = (player, computer) => {
    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.playerScore');
    const computerScoreBoard = document.querySelector('.computerScore');
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if(player === computer){
        result.textContent = 'It is a tie!';
    }else if(player == 'rock'){
        if(computer == 'paper'){
            result.textContent = 'Computer Wins!';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = 'Player Wins!';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }else if(player == 'scissors'){
        if(computer == 'rock'){
            result.textContent = 'Computer Wins!';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = 'Player Wins!';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }else if(player == 'paper'){
        if(computer == 'scissors'){
            result.textContent = 'Computer Wins!';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = 'Player Wins!';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
}
const gameOver = (playerOptions, movesLeft) => {
    const chooseMove = document.querySelector('.move');
}

// const weapons = Array.from(document.querySelectorAll('.weapon'));
// weapons.forEach(weapon => weapon.addEventListener('click', playGame));
// window.addEventListener('click', playGame);

// function playGame(){
//     let playerWins = 0;
//     let computerWins = 0;
//     let playerSelection = "";
//     let computerSelection = "";
//     let roundResult = "";
//     let gameResult = "";
//     let roundCount = 0;
//     let playerScore = document.getElementById("playerScore");
//     let computerScore = document.getElementById("computerScore");
//     let roundResultDisplay = document.getElementById("roundResult");
//     let gameResultDisplay = document.getElementById("gameResult");
//     let roundCountDisplay = document.getElementById("roundCount");

//     function getComputerChoice(){
//         var choice = Math.floor(Math.random() * 3);
//         if (choice === 0){
//             computerSelection = "rock";
//             document.getElementById("computerChoice").src = "images/rock.png";
//         } else if (choice === 1){
//             computerSelection = "paper";
//             document.getElementById("computerChoice").src = "images/paper.png";
//         } else {
//             computerSelection = "scissors";
//             document.getElementById("computerChoice").src = "images/scissors.png";
//         }
//     }

//     function playRound(playerSelection, computerSelection){
//         getComputerChoice();
//         if (playerSelection === document.getElementById(0)){
//             playerSelection = "rock";
//             document.getElementById("playerChoice").src = "images/rock.png";
//         } else if (playerSelection === document.getElementById(1)){
//             playerSelection = "paper";
//             document.getElementById("playerChoice").src = "images/paper.png";
//         } else {
//             playerSelection = "scissors";
//             document.getElementById("playerChoice").src = "images/scissors.png";
//         }
//         if (playerSelection === computerSelection){
//             return "*****Tie game!*****";
//         } else if (playerSelection === "rock"){
//             if (computerSelection === "paper"){
//                 computerWins = computerWins + 1;
//                 return "*****Computer wins!*****";  
//             } else {
//                 playerWins = playerWins + 1;
//                 return "*****Player wins!*****";
//             }
//         } else if (playerSelection === "paper"){
//             if (computerSelection === "scissors"){
//                 computerWins = computerWins + 1;
//                 return "*****Computer wins!*****";
//             } else {
//                 playerWins = playerWins + 1;
//                 return "*****Player wins!*****";
//             }
//         } else if (playerSelection === "scissors"){
//             if (computerSelection === "rock"){
//                 computerWins = computerWins + 1;
//                 return "*****Computer wins!*****";
//             } else {
//                 playerWins = playerWins + 1;
//                 return "*****Player wins!*****";
//             }
//         }
//     }
    

// }



// let playerWins = 0;
// let computerWins = 0;

// function getComputerChoice(){
//     var choice = Math.floor(Math.random() * 3);
//     if (choice === 0){
//         return "rock";
//     } else if (choice === 1){
//         return "paper";
//     } else {
//         return "scissors";
//     }
// }

// function playRound(playerSelection, computerSelection){
    //add event listener to buttons
    

//     if (playerSelection === computerSelection){
//         return "*****Tie game!*****";
//     } else if (playerSelection === "rock"){
//         if (computerSelection === "paper"){
//             computerWins = computerWins + 1;
//             return "*****Computer wins!*****";  
//         } else {
//             playerWins = playerWins + 1;
//             return "*****Player wins!*****";
//         }
//     } else if (playerSelection === "paper"){
//         if (computerSelection === "scissors"){
//             computerWins = computerWins + 1;
//             return "*****Computer wins!*****";
//         } else {
//             playerWins = playerWins + 1;
//             return "*****Player wins!*****";
//         }
//     } else if (playerSelection === "scissors"){
//         if (computerSelection === "rock"){
//             computerWins = computerWins + 1;
//             return "*****Computer wins!*****";
//         } else {
//             playerWins = playerWins + 1;
//             return "*****Player wins!*****";
//         }
//     }
// }
// // const playerSelection = "rock";
// // const computerSelection = getComputerChoice();
// // console.log(playRound(playerSelection, computerSelection));

// function game(){
//     for (let i = 0; i < 5; i++){
//         let playerSelection = prompt("rock, paper, or scissors?");
//         let computerSelection = getComputerChoice();
//         console.log("Player: " + playerSelection);
//         console.log("Computer: " + computerSelection);
//         console.log(playRound(playerSelection, computerSelection));
//         console.log("Current Score -> " + "Player: " + playerWins, "Computer: " + computerWins);
//     }
    
//     if (playerWins > computerWins){
//         console.log("\~\*\~\*\~\*\~\*\~\*\~Game Over, Player wins!\~\*\~\*\~\*\~\*\~\*\~");
//     } else if (playerWins < computerWins){
//         console.log("\~\*\~\*\~\*\~\*\~\*\~Game Over, Computer wins!\~\*\~\*\~\*\~\*\~\*\~");
//     }else {
//         console.log("\~\*\~\*\~\*\~\*\~\*\~Game Over, Tie game!\~\*\~\*\~\*\~\*\~\*\~");
//     }
// }
// game();