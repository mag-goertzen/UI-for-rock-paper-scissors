let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', (e) => {
        gameResult = singleGame(button.id, computerPlay());
        
      
            if (gameResult == 1){
                //You win, print score to '#scoreBoard'
                const scoreBoard = document.querySelector('#scoreBoard');

                const yourScore = document.createElement('p');
                yourScore.classList.add('yourScore');
                yourScore.textContent = 'You win! \n';
                

                scoreBoard.appendChild(yourScore);

                
            } else if (gameResult == 2){
                //Computer wins, print score to '#scoreBoard'
                const scoreBoard = document.querySelector('#scoreBoard');

                const computerScore = document.createElement('p');
                computerScore.classList.add('computerScore');
                computerScore.textContent = 'Computer win! \n';

                scoreBoard.appendChild(computerScore);

                
            } else {
                //Tie, redo game
                alert('Play again! You tied!')
        };
        var yourPoints = document.getElementsByClassName('yourScore').length;
        var computerPoints = document.getElementsByClassName('computerScore').length;
        
                if (yourPoints >= 5){
                        alert('YOU WON FIVE GAMES!');
                } else if(computerPoints >=10) {
                        alert('The computer beat you, 5/'+yourPoints);
                 }else{};
    })
})
