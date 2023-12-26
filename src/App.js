import { useState } from 'react';
import Board from './Component/Board';
import Move from './Component/moves';


export default function App() {

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const isXNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    
    const nextHistory= [...history.slice(0,nextMove+1)];
    console.log(nextHistory);
    setHistory(nextHistory);// added functionality to delete history
    setCurrentMove(nextMove);
    
  }


  return (
    <div className="game">
      <div className="game-board">
        <Board isXNext={isXNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">

        <ol>
        { history.map ((_,move) => {

          let description;
          if (move > 0) {
          description = 'Go to move #' + move;
          } else {
          description = 'Go to game start';
          }
          
          return (
            <Move key={move} jumpTo={jumpTo} description={description} move={move}/>)
        })}

        </ol>
      </div>
    </div>
  );
}




