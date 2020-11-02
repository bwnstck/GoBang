import "./game.css";
import React, { useState } from "react";
import Board from "./Board";
import {
  diagLeftTopRight,
  diagRightTopLeft,
  horizontalWins,
  verticalWins,
} from "../utils/calculation";

export default function Game() {
  const [history, setHistory] = useState([{ squares: Array(64).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    const currentHistory = history.slice(0, stepNumber + 1);
    const currentStep = currentHistory[currentHistory.length - 1];

    const squares = currentStep.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "🦩" : "🦖";

    setHistory(currentHistory.concat([{ squares: squares }]));
    setStepNumber(currentHistory.length);
    setXIsNext(!xIsNext);
  }

  function jumpTo(step) {
    console.log("jump to ", step);
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  }
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start: ";
    return (
      <li key={move}>
        <button
          className={"historyButton"}
          onClick={() => {
            jumpTo(move);
            console.log(move, desc);
          }}
        >
          {" "}
          {desc}
        </button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = `Next player:${xIsNext ? "🦩" : "🦖"}`;
  }

  return (
    <div className="game">
      <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

const winningArray = [];

horizontalWins(0, winningArray);
horizontalWins(8, winningArray);
horizontalWins(16, winningArray);
horizontalWins(24, winningArray);
horizontalWins(32, winningArray);
horizontalWins(40, winningArray);
horizontalWins(48, winningArray);
horizontalWins(56, winningArray);

verticalWins(0, winningArray);
verticalWins(1, winningArray);
verticalWins(2, winningArray);
verticalWins(3, winningArray);
verticalWins(4, winningArray);
verticalWins(5, winningArray);
verticalWins(6, winningArray);
verticalWins(7, winningArray);

diagRightTopLeft(0, winningArray);
diagRightTopLeft(1, winningArray);
diagRightTopLeft(2, winningArray);
diagRightTopLeft(3, winningArray);

diagLeftTopRight(7, winningArray);
diagLeftTopRight(6, winningArray);
diagLeftTopRight(5, winningArray);
diagLeftTopRight(4, winningArray);
//!Calculate Winner

function calculateWinner(squares) {
  const lines = winningArray;
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d, e] = lines[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c] &&
      squares[a] === squares[d] &&
      squares[a] === squares[e]
    ) {
      return squares[a];
    }
  }
  return null;
}
