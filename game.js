let computerChoice
let playerChoice
let computerScore = 0
let playerScore = 0

const playerResult = document.querySelector("#playerScore")
const computerResult = document.querySelector("#computerScore")
const output = document.querySelector("#output")
const result = document.querySelector("#result")

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

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id
        getComputerChoice()
        playRound(playerChoice,computerChoice)
        playerResult.textContent = `Your score: ${playerScore}`;
        computerResult.textContent = `Computer score: ${computerScore}`;
        checkWinner()
    })
})



function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        outcome = "Draw"
        output.textContent = `It's a Draw!`
    } else if (playerSelection === "ROCK") {
        if (computerSelection === "PAPER") {
            output.textContent = `You lose! Computer choose ${computerSelection} which beats ${playerSelection}`
            computerScore++
        } else {
            output.textContent = `You win! You choose ${playerSelection} which beats ${computerSelection}`
            playerScore++
        }
    } else if (playerSelection === "PAPER") {
        if (computerSelection === "ROCK") {
            output.textContent = `You win! You choose ${playerSelection} which beats ${computerSelection}`
            playerScore++
        } else {
            output.textContent = `You lose! Computer choose ${computerSelection} which beats ${playerSelection}`
            computerScore++
        }
    } else if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK") {
            output.textContent = `You lose! Computer choose ${computerSelection} which beats ${playerSelection}`
            computerScore++
        } else {
            output.textContent = `You win! You choose ${playerSelection} which beats ${computerSelection}`
            playerScore++
        }
    } else {
        outcome = "Please insert correct parameters"
    }
}

function checkWinner () {
    while (playerScore === 5 || computerScore === 5) {
        declareWinner()
        buttons.forEach(option => {
            option.style.display = 'none';
        })
}
}

function declareWinner() {
    if (playerScore === 5) {
        result.textContent = "HOORAY~ You are the winner"
        playerScore = 0
        computerScore = 0
    } else if (computerScore === 5) {
        result.textContent = "Noob~ Try again"
        playerScore = 0
        computerScore = 0
    }
}

function endGame () {
    const resetBtn = document.querySelector('#reset');

    resetBtn.addEventListener('click', () => {
        window.location.reload();
    })
}

endGame()
