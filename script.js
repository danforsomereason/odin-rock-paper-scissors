const moves = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    const random = Math.floor(Math.random() * moves.length);
    const computerChoice = moves[random];
    console.log("Computer Choice: ", computerChoice);
    return computerChoice;
}

let gameOver = false;
let humanScore = 0;
let computerScore = 0;

let results = document.querySelector(".results");


let selection = document.querySelector('.container');
selection.addEventListener("click", (event) => {

    if(gameOver) return;
    let humanSelection = null;
    let target = event.target.textContent.toLowerCase();
    console.log("Target: ", target);

    switch(target){
        case 'rock':
            console.log('Human chooses rock');
            humanSelection = "rock";
            break;
        case 'scissors':
            console.log('Human chooses scissors');
            humanSelection = "scissors";
            break;
        case 'paper':
            console.log('Human chooses paper');
            humanSelection = "paper";
            break; 
        default:
            return;       
    }
    if(humanSelection){
        playRound(humanSelection, getComputerChoice());
    }    
})



// function getHumanChoice(roundNumber){
        
//     while(true){
//         const humanChoice = prompt(`Round ${roundNumber}: Rock, Paper Scissors - Shoot!`).toLowerCase();
//         if(moves.includes(humanChoice)){
//             console.log("Human Choice: ", humanChoice);
//             return humanChoice;
//         }
//         alert('Please enter rock, paper, or scissors');
//     }    
// }


function playRound(humanSelection, computerChoice){
    let message = '';
    if(humanSelection === 'rock' && computerChoice === 'scissors' ||
        humanSelection === 'scissors' && computerChoice === 'paper' ||
        humanSelection === 'paper' && computerChoice === 'rock'){
            humanScore++;
            message += `You win! ${humanSelection.at(0).toUpperCase() + humanSelection.slice(1)} beats ${computerChoice}.`;
            results.textContent = message;
        } else if (humanSelection === computerChoice){
            message += `You draw! You both picked ${humanSelection}.`;
            results.textContent = message;
        } else {
            computerScore++;
            message += `You lose! ${computerChoice.at(0).toUpperCase() + computerChoice.slice(1)} beats ${humanSelection}.`;
            results.textContent = message;
        }

        if (humanScore === 3){
            message = "You win!"
            results.textContent = message;
            gameOver = true;
        } else if (computerScore === 3) {
            message = "You lose!"
            gameOver = true;
            results.textContent = message;
        }

        console.log('Score - Human: ', humanScore, 'to Computer: ',computerScore);
        
}





