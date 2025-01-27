const moves = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    const random = Math.floor(Math.random() * moves.length);
    const computerChoice = moves[random];
    console.log("Computer Choice: ", computerChoice);
    return computerChoice;
}

function getHumanChoice(roundNumber){
        
    while(true){
        const humanChoice = prompt(`Round ${roundNumber}: Rock, Paper Scissors - Shoot!`).toLowerCase();
        if(moves.includes(humanChoice)){
            console.log("Human Choice: ", humanChoice);
            return humanChoice;
        }
        alert('Please enter rock, paper, or scissors');
    }    
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    let message = '';
    if(humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'scissors' && computerChoice === 'paper' ||
        humanChoice === 'paper' && computerChoice === 'rock'){
            humanScore++;
            message += `You win! ${humanChoice.at(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
        } else if (humanChoice === computerChoice){
            message += `You draw! You both picked ${humanChoice}.`;
        } else {
            computerScore++;
            message += `You lose! ${computerChoice.at(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
        }

    console.log('Score - Human: ', humanScore, 'to Computer: ',computerScore);
    console.log(message);
}

function playGame(){
    let gameOver = false
    let roundNumber = 1;
    while(!gameOver){
        const humanSelection = getHumanChoice(roundNumber++);
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        if(humanScore === 3){
            gameOver = true;
            return 'You win!';
            
        } else if ( computerScore === 3 ){
            gameOver = true;
            return 'You lose!';
            
        } 
    }
    
}

console.log(playGame());
