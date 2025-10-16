import { initialGameBoard } from "../data/initialGameBoard";

export default function GameBoard({turns, onActivePlayer}){
    const gameBoard = initialGameBoard;

    for(const turn of turns){
        const {square, player} = turn;
        const {row, col} = square;
        gameBoard[row][col] = player;
    }

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex){
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = prevGameBoard.map(innerArray => [...innerArray]);
    //             updatedBoard[rowIndex][colIndex] = activePlayer;
    //                 return updatedBoard;
    //         }
    //     );

    //     onActivePlayer();
    // }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}><button onClick={() => onActivePlayer(rowIndex, colIndex)}>{playerSymbol}</button></li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}