function getComputerChoice () {
    let x = Math.floor((Math.random() * 3) + 1);

    if(x === 1) {
        computerChoice = "ROCK"
    } else if (x === 2) {
        computerChoice = "PAPER"
    } else {
        computerChoice = "SCISSORS"
    }

    return computerChoice
}

/**function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        outcome = "Draw"
    } else if (playerSelection === "ROCK") {
        if (computerSelection === "PAPER") {
            outcome = "You lose!"
        } else {
            outcome = "You win!"
        }
    } else if (playerSelection === "PAPER") {
        if (computerSelection === "ROCK") {
            outcome = "You win!"
        } else {
            outcome = "You lose!"
        }
    } else if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK") {
            outcome = "You lose!"
        } else {
            outcome = "You win!"
        }
    } else {
        outcome = "Please insert correct parameters"
    }
    return outcome
}*/

const playRound = (playerSelection, computerSelection) => {
    switch (playerSelection + computerSelection) {
        case "SCISSORSPAPER":
        case "ROCKSCISSORS":
        case "PAPERROCK":
            outcome = "You win"
            break
        case "PAPERSCISSORS":
        case "SCISSORSROCK":
        case "ROCKPAPER":
            outcome = "You lose"
            break
        case "PAPERPAPER":
        case "SCISSORSSCISSORS":
        case "ROCKROCK":
            outcome = "Draw"
            break
        default:
            outcome = "Please insert correct parameters"
    }
    return outcome
}

function game() {
    for (let i = 0; i < 5; i++) {
        let input = prompt("Select your weapon!", "");
        let playerSelection = input.toUpperCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
        console.log(playerSelection)
        console.log(computerSelection)
        console.log(playRound(playerSelection, computerSelection))
    }
}

game()

