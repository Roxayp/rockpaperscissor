const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;


    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorsBtn = document.querySelector('.scissors');
        const playerOptions = [rockBtn, paperBtn, scissorsBtn];
        const computerOptions = ['rock', 'paper', 'scissors'];

        playerOptions.forEach(option => {
            option.addEventListener('click', function(){
                const movesLeft = document.querySelector('.movesLeft');
                moves++;
                movesLeft.innerText = `Moves Left: ${5-moves}`;

                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceNumber];
                winner(this.innerText, computerChoice);

                if (moves === 5){
                    gameOver(playerOptions, movesLeft);
                }
            })
        })
    }
    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.playerScore');
        const computerScoreBoard = document.querySelector('.computerScore');
        const imgP = document.createElement('img');
        const imgC = document.createElement('img');

        player = player.toLowerCase();
        computer = computer.toLowerCase();
        
        if (player == 'rock'){
            imgP.src = 'images/rock.png';
            const src = document.getElementById('plChoice');
            src.appendChild(imgP);
        }else if (player == 'paper'){
            imgP.src = 'images/paper.png';
            const src = document.getElementById('plChoice');
            src.appendChild(imgP);
        }else{
            imgP.src = 'images/scissors.png';
            const src = document.getElementById('plChoice');
            src.appendChild(imgP);
        }

        if (computer == 'rock'){
            imgC.src = 'images/rock.png';
            const src = document.getElementById('cpChoice');
            src.appendChild(imgC);
        }else if (computer == 'paper'){
            imgC.src = 'images/paper.png';
            const src = document.getElementById('cpChoice');
            src.appendChild(imgC);
        }else{
            imgC.src = 'images/scissors.png';
            const src = document.getElementById('cpChoice');
            src.appendChild(imgC);
        }

        if(player === computer){
            result.textContent = 'It is a tie!';
        }else if(player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'Computer Wins!';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
                playerScoreBoard.textContent = playerScore;
            }else{
                result.textContent = 'Player Wins!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
                computerScoreBoard.textContent = computerScore;
            }
        }else if(player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = 'Computer Wins!';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
                playerScoreBoard.textContent = playerScore;
            }else{
                result.textContent = 'Player Wins!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
                computerScoreBoard.textContent = computerScore;
            }
        }else if(player == 'paper'){
            if(computer == 'scissors'){
                result.textContent = 'Computer Wins!';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
                playerScoreBoard.textContent = playerScore;
            }else{
                result.textContent = 'Player Wins!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
                computerScoreBoard.textContent = computerScore;
            }
        }
    }
    const gameOver = (playerOptions, movesLeft) => {
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
        playerOptions.forEach(option => {
            option.style.display = 'none';
        });

        chooseMove.innerText = 'Game Over!';
        movesLeft.style.display = 'none';

        if(playerScore > computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game!';
        }else if(playerScore < computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game!';
        }else{
            result.style.fontSize = '2rem';
            result.innerText = 'It is a tie!';
        }
        reloadBtn.innerText = 'Restart Game';
        reloadBtn.style.display = 'flex';
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        });
    }
    playGame();
}

game();
