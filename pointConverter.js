function pointConverter(gameResults){

    let sum = 0;

    for (let i = 0; i<gameResults.length; i++){
        sum += gameResults[i];
    }

    return sum
}