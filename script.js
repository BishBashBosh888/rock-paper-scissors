const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(){
    const choice = Math.floor((Math.nradom() * 3) + 1);
    return choices[choice];
}
