import "./board.css";
import React from "react";
import Square from "./Square";

export default function Board(props) {
  return (
    <div className="game-board">
      {/* <div className="status">{status}</div> */}
      {props.squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={() => props.onClick(index)}
        />
      ))}
    </div>
  );
}
