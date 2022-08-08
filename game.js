function getComputerChoice () {
    let randomNumber = Math.floor((Math.random() *3) + 1);

    if(randomNumber === 1) {
        computerChoice = "Rock"
    } else if (randomNumber === 2) {
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    }

    return computerChoice
}

console.log(getComputerChoice())