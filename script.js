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
    let HumanChoice = prompt('choose any one \nLove-Lust-Logic : ').toLowerCase()
    return HumanChoice
}

function printResult (humanChoice, computerChoice, message) {
    console.log(`humanChoice = ${humanChoice} & computerChoice = ${computerChoice}\n${message}`)
}


function playGame() {
    let humanScore = 0, computerScore = 0

    function playRound(humanChoice, computerChoice) {
        // It's a draw
        if (humanChoice === computerChoice){
            printResult(humanChoice, computerChoice, 'It\'s a draw')
        }
        // player Won
        else if (humanChoice == 'love' && computerChoice == 'logic') {
            printResult(humanChoice, computerChoice, 'You Won!')

            humanScore += 1
        }
        else if (humanChoice == "lust" && computerChoice == 'love') {
            printResult(humanChoice, computerChoice, 'You Won!')

            humanScore += 1
        }
        else if (humanChoice == "logic" && computerChoice == "lust") {
            printResult(humanChoice, computerChoice, 'You Won!')

            humanScore += 1
        }
        // player Lose
        else {
            printResult(humanChoice, computerChoice, 'You Lose!')

            computerScore += 1
        }
    }
    
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`humanScore = ${humanScore} & computerScore = ${computerScore}`)

    alert('Open the console HANDSOME, to see the score \nand remember nothing beats LUST nothing means nothing except :\nCASTRATION or VASECTOMY')
}

playGame()