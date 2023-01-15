import React from 'react';
import Board from "./Board";

export default function Game() {
  const status = "Next player is X"
  const moves = <li>
    <button>Start the Game</button>
  </li>
  const squares = Array(9).fill(null)
  return <div>
    <div className="game-board">
      <Board squares={squares}></Board>
    </div>
    <div className="game-info">
      <div>{status}</div>
      <div>{moves}</div>
    </div>
  </div>
}



