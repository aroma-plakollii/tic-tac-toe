export default function GameBoard({boardGame, onSymbolSelection}){
    return (
        <ol id="game-board">
            {boardGame.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}><button onClick={() => onSymbolSelection(rowIndex, colIndex)} disabled={playerSymbol}>{playerSymbol}</button></li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}