const buttons = document.querySelectorAll('.choices button');
const result = document.getElementById('result');

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
        return "You win!";
    } else {
        return "You lose!";
    }
}

function updateResult(userChoice, computerChoice, gameResult){
    result.textContent = `You chose ${userChoice}, Computer chose ${computerChoice}. ${gameResult}`;
}

buttons.forEach(button => {
    button.addEventListener('click', () =>{
        const userChoice = button.id;
        console.log(userChoice);
        const computerChoice = getComputerChoice();
        console.log(computerChoice);
        const gameResult = getWinner(userChoice, computerChoice);
        updateResult(userChoice, computerChoice, gameResult)
    })
});