import { useState } from "react"
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import Players from "./components/Players";
import GameOver from "./components/GameOver";
import { PLAYERS } from "./data/players";
import { INITIAL_GAME_BOARD } from "./data/initialGameBoard";
import { WINNING_COMBINATIONS } from "./data/winningCombinations";
import { deriveBoardGame, deriveCurrentPlayer, deriveWinner } from "./data/derivedData";

function App() {
  const [turns, setTurns] = useState([]);
  const [player, setPlayer] = useState(PLAYERS);

  const currentPlayer = deriveCurrentPlayer(turns);
  const boardGame = deriveBoardGame(INITIAL_GAME_BOARD, turns);
  const winner = deriveWinner(boardGame, WINNING_COMBINATIONS, player);
  const isDraw = turns.length === 9 && !winner;

  function handleSymbolSelection(rowIndex, colIndex){
    setTurns((prevTurns) => {
      let currentPlayer = deriveCurrentPlayer(prevTurns);

      const updatedTurns = [{square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns];

      return updatedTurns;
    });
  }

  function handleRematch(){
    setTurns([]);
  }

  function handlePlayer(symbol, playerName){
    setPlayer((prevPlayer) => {
      return {
        ...prevPlayer,
        [symbol] : playerName
      }
    })
  }

  return (
    <main>
      <div id='game-container'>
          <ol id='players' className='highlight-player'>
            <Players isActive={currentPlayer === 'X'} symbol='X' initialName={PLAYERS['X']} onPlayer={handlePlayer} />
            <Players isActive={currentPlayer === 'O'} symbol='O' initialName={PLAYERS['O']} onPlayer={handlePlayer} />
          </ol>
          {(winner || isDraw) && <GameOver winner={winner} onRematch={handleRematch} />}
          <GameBoard boardGame={boardGame} onSymbolSelection={handleSymbolSelection} />
      </div>
      <Log turns={turns} />
    </main>
  )
}

export default App

