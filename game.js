function game() {

    let games = [1,2,3,4,5];
    let gameResults = [];
    let sum;
    let result;
    
    for (let i = 0; i < games.length; i++){
        playerSelection = window.prompt('What do you want to play? (Rock? Paper? Scissors?)');
        computerSelection = computerPlay();
        gameResults[i] = singleGame(playerSelection,computerSelection);
            while (gameResults[i] == 5){
                playerSelection = window.prompt('Tie! Go again!');
                computerSelection = computerPlay();
                gameResults[i] = singleGame(playerSelection,computerSelection);
            } ;
    };

   sum = pointConverter(gameResults);

    if (sum >= 3){
        result = 'You win!';
    } else{
        result = 'You lose!';
    };

    return result
    
}