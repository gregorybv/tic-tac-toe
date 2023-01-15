import React, {useReducer} from 'react';
import Board from "./Board";
import {calculateNewValue} from "@testing-library/user-event/dist/utils";

const reducer = (state, action) => {
  switch (action.type) {
    case 'MOVE':
      return {
        ...state, history: state.history.concat({
          squares: action.payload.squares,
        }),
        xIsNext: !state.xIsNext,
      }
    default:
      return state
  }
}

export default function Game() {
  const [state, dispatch] = useReducer(reducer, {
    xIsNext: true,
    history: [{squares: Array(9).fill(null)}],
  })
  const {xIsNext, history} = state
  const handleClick = (i) => {
    const current = history[history.length - 1]
    const squares = current.slice()
    const winner = calculateWinner(squares)
    if (winner || squares[i]) {
      return
    }
    squares[i] = xIsNext ? 'x' : 'o'
    dispatch({type: 'MOVE', payload: {squares}})
  }
  const current = history[history.length - 1]
  const winner = calculateWinner(current.squares)
  const status = winner ? winner === 'D' ? 'Draw' : 'Winner is' + winner :
    'Next player is ' + (xIsNext ? 'X' : 'O')
:

  const moves = history.map((step, move) => {
    const desc = move ? 'Go to #' + move : 'Start the Game'
    return <li>
      <button>{desc}</button>
    </li>
  })
  const squares = Array(9).fill(null)
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares}></Board>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <div>{moves}</div>
      </div>
    </div>
  )
}
const calculateWinner = (squares) => {
  return null
}



