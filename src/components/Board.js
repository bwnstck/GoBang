import "./board.css";
import React from "react";
import Square from "./Square";
import { render } from "react-dom";

export default function Board(props) {
  const createAndFillSquares = (i) => {
    const squares = Array(0).fill(null);
    for (i; i < i + 8; i++) {
      squares[i] = i;
    }
    console.log(squares);

    // return squares.map((square) => (
    //   <Square
    //     key={square}
    //     value={square}
    //     onClick={() => props.onClick(square)}
    //   />
    // ));
  };

  // function renderSquare(i) {
  //   return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  // }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">{createAndFillSquares(0)}</div>
    </div>
  );
}
