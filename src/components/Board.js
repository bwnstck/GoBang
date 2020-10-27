import "./board.css";
import React from "react";
import Square from "./Square";

export default function Board(props) {
  function renderSquare(i) {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
      </div>
      <div className="board-row">
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
      </div>
      <div className="board-row">
        {renderSquare(8)}
        {renderSquare(9)}
        {renderSquare(10)}
        {renderSquare(11)}
      </div>
      <div className="board-row">
        {renderSquare(12)}
        {renderSquare(13)}
        {renderSquare(14)}
        {renderSquare(15)}
      </div>
    </div>
  );
}
