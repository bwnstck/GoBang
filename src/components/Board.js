import "./board.css";
import React from "react";
import Square from "./Square";
import { render } from "react-dom";

export default function Board(props) {
  const squaresFrom = (min, max) => {
    const squareArray = [];
    for (let i = min; i < max; i++) {
      squareArray.append(renderSquare(i));
    }
    return squareArray;
  };

  function renderSquare(i) {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">{...squaresFrom(0, 7)}</div>
      {/* <div className="board-row">{squaresFrom(8, 15)}</div>
      <div className="board-row">{squaresFrom(16, 23)}</div>
      <div className="board-row">{squaresFrom(24, 31)}</div> */}
    </div>
  );
}
