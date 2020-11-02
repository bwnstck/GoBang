import "./board.css";
import React from "react";
import Square from "./Square";

export default function Board(props) {
  const squares = Array(64).fill(null);

  return (
    <div>
      <div className="status">{status}</div>
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={() => props.onClick(square)}
        />
      ))}
    </div>
  );
}
