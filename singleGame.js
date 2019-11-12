function singleGame(playerSelection,computerSelection) {


playerSelection = playerSelection.toLowerCase();
computerSelection = computerSelection.toLowerCase();
let gameResult;


    if (playerSelection === 'rock'){
        if (computerSelection === 'scissors')
        {gameResult = 1;}
        else if (computerSelection === 'paper')
        {gameResult = 2;}
        else 
        {gameResult = 5};
    } else {}; 

    if (playerSelection === 'scissors'){
        if (computerSelection === 'paper') 
            {gameResult = 1;}
        else if (computerSelection === 'rock')
            {gameResult = 2;}
        else
        {gameResult = 5};
    } else {}; 

    if (playerSelection === 'paper'){
        if (computerSelection === 'rock')
            {gameResult = 1;}
        else if (computerSelection === 'scissors')
            {gameResult = 2;} 
        else 
        {gameResult = 5};
    } else {};       
  
return gameResult;
}

