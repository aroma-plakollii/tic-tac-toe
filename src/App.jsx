import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Players from "./components/Players"
import { Log } from "./components/Log";

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O';
  }

  return currentPlayer
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleActivePlayer(rowIndex, colIndex){
    // setActivePlayer((prevActivePlayer) => prevActivePlayer === 'X' ? 'O' : 'X'); 
    setGameTurns((prevGameTurns) => {
      let currentPlayer = deriveActivePlayer(prevGameTurns);
      
      const updatedGameTurns = [{square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevGameTurns];

      return updatedGameTurns;
    });
  }

  return (
    <main>
      <div id='game-container'>
          <ol id='players' className='highlight-player'>
          <Players isActive={activePlayer === 'X'} initialName={'Player 1'} symbol={'X'} />
          <Players isActive={activePlayer === 'O'} initialName={'Player 2'} symbol={'O'} />
          </ol>
        <GameBoard turns={gameTurns} onActivePlayer={handleActivePlayer} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App

