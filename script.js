function getComputerChoice() {
    let randomValue = Math.floor(Math.random() * 3)
    switch (randomValue) {
        case 0:
            return 'Love'
        case 1:
            return 'Lust'
        case 2:
            return 'Logic'
    }
}