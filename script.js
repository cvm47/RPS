function getComputerChoice() {
    let randomValue = Math.floor(Math.random() * 3)
    switch (randomValue) {
        case 0:
            return 'love'
        case 1:
            return 'lust'
        case 2:
            return 'logic'
    }
}

function getHumanChoice() {
    let humanChoice = prompt('choose any one \nLove-Lust-Logic : ').toLowerCase()
    return humanChoice
}

function printResult (humanChoice, computerChoice, message) {
    console.log(`humanChoice = ${humanChoice} & computerChoice = ${computerChoice}\n${message}`)
}


// div display Result
let displayResult = document.querySelector('.displayResult')

let humanScore = 0, computerScore = 0

function playRound(humanChoice, computerChoice) {
    // It's a draw
    if (humanChoice === computerChoice){
        // printResult(humanChoice, computerChoice, 'It\'s a draw')
        displayResult.textContent = `humanChoice = ${humanChoice}, computerChoice = ${computerChoice}`
    }
    // player Won
    else if (humanChoice == 'love' && computerChoice == 'logic') {
        displayResult.textContent = `humanChoice = ${humanChoice}, computerChoice = ${computerChoice}`
        humanScore += 1
    }
    else if (humanChoice == "lust" && computerChoice == 'love') {
        displayResult.textContent = `humanChoice = ${humanChoice}, computerChoice = ${computerChoice}`
        humanScore += 1
    }
    else if (humanChoice == "logic" && computerChoice == "lust") {
        displayResult.textContent = `humanChoice = ${humanChoice}, computerChoice = ${computerChoice}`
        humanScore += 1
    }
    // player Lose
    else {
        displayResult.textContent = `humanChoice = ${humanChoice}, computerChoice = ${computerChoice}`
        computerScore += 1
    }
}


const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.textContent.toLowerCase(), getComputerChoice())
    })
})
