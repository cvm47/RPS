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
