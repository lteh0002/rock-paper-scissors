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

let playerScore = 0
let computerScore = 0

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
            playerScore++
            break
        case "PAPERSCISSORS":
        case "SCISSORSROCK":
        case "ROCKPAPER":
            outcome = "You lose"
            computerScore++
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

function checkInput(selection) {
    if ((selection !== "ROCK") && (selection !== "PAPER") && (selection !== "SCISSORS")) {
        prompt("Please insert only rock, paper or scissors")
    } else if ((selection == null) || (selection == undefined)) {
        prompt("Please insert only rock, paper or scissors")
    } else {
        return playRound(selection, getComputerChoice());
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let input = prompt("Select your weapon!", "");
        playerSelection = input.toUpperCase();
        const computerSelection = getComputerChoice();
        console.log(checkInput(playerSelection));
        console.log(playerScore);
        console.log(computerScore);
    }
}

if (playerScore > computerScore) {
    console.log("Player wins");
} else {
    console.log("Computer win!")
}

game()

