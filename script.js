const buttons = document.querySelectorAll('.choices button');
const result = document.getElementById('result');
const scoreText = document.getElementById('score');
let humanScore = 0;
let computerScore = 0;

const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function getWinner(userChoice, computerChoice){
    if (userChoice === computerChoice) {
        return 'Tie!';
    } else if (
        (userChoice === 'Rock' && computerChoice === 'Scissors') ||
        (userChoice === 'Paper' && computerChoice === 'Rock') ||
        (userChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        humanScore++;
        return "You win!";
    } else {
        computerScore++;
        return "You lose!";
    }
}

function updateResult(userChoice, computerChoice, gameResult){
    result.textContent = `You chose ${userChoice}, Computer chose ${computerChoice}. ${gameResult}`;
}

function updateScoreText(humanScore,computerScore){
    scoreText.textContent = `${humanScore} Human - Computer ${computerScore}`
}

buttons.forEach(button => {
    button.addEventListener('click', () =>{
        const userChoice = button.id;
        console.log(userChoice);
        const computerChoice = getComputerChoice();
        console.log(computerChoice);
        const gameResult = getWinner(userChoice, computerChoice);
        updateScoreText(humanScore,computerScore);
        updateResult(userChoice, computerChoice, gameResult)
    })
});