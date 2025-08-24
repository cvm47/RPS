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

let humanScore = 0, computerScore = 0

function playRound(humanChoice, computerChoice) {
    // It's a draw
    if (humanChoice === computerChoice){
        console.log(`humanChoice = ${humanChoice} & computerChoice = ${computerChoice}\nIt's a Draw`)
    }
    // player Won
    else if (humanChoice == 'love' && computerChoice == 'logic') {
        console.log(`humanChoice = ${humanChoice} & computerChoice = ${computerChoice}\nYou Win! Love beats Logic`)

        humanScore += 1
    }
    else if (humanChoice == "lust" && computerChoice == 'love') {
        console.log(`humanChoice = ${humanChoice} & computerChoice = ${computerChoice}\nYou Win! Lust beats Love`)

        humanScore += 1
    }
    else if (humanChoice == "logic" && computerChoice == "lust") {
        console.log(`humanChoice = ${humanChoice} & computerChoice = ${computerChoice}\nYou Win! Logic beats Lust (no it doesn\'t)`)
    }
    // player Lose
    else {
        console.log(`humanChoice = ${humanChoice} & computerChoice = ${computerChoice}\nYou Lose! ${computerChoice} beats ${humanChoice}`)

        computerScore += 1
    }
}

function playGame() {
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`humanScore = ${humanScore} & computerScore = ${computerScore}`)
}

playGame()