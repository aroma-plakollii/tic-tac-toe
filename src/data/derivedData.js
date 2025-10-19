export function deriveCurrentPlayer(turns){
    let currentPlayer = 'X';

    if(turns.length > 0 && turns[0].player === 'X'){
        currentPlayer = 'O';
    }

    return currentPlayer;
}

export function deriveBoardGame(initialGameBoard, turns){
    const boardGame = [...initialGameBoard.map((innerArray) => [...innerArray])]; 

    for(const turn of turns){
        const { square, player } = turn;
        const { row, col } = square;
        boardGame[row][col] = player;
    }

    return boardGame;
}

export function deriveWinner(boardGame, winningCombination, player){
    let winner;

    console.log(player);
    

    for(let combination of winningCombination){
        const firstSquare = boardGame[combination[0].row][combination[0].col];
        const secondSquare = boardGame[combination[1].row][combination[1].col];
        const thirdSquare = boardGame[combination[2].row][combination[2].col];

        if(firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare){
            winner = player[firstSquare];
        }
    }

    return winner;
}