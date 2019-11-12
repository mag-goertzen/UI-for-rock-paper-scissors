function computerPlay() {
    const myArray = [
        'Rock',
        'Paper',
        'Scissors'
    ];

    const computerSelection = myArray[Math.floor(Math.random()*myArray.length)];
    return computerSelection
}