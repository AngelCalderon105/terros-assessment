// Board Component
// Role: Keep Track of Pieces and Render 2D Array Chess Board
// State Management: 2D Board, Piece Selection, IsSelected

import { useState } from "react";
import Tile from "./Tile";
import { isValidMove } from "../utils/moveValidation";

//Types
export interface PositionType {
  row: number;
  col: number;
}

export interface PieceObjectType {
  player: "Player 1" | "Player 2";
  pieceType: "Pawn" | "Rook" | "Knight" | "Bishop" | "Queen" | "King";
  position: PositionType;
}

// The board is a 2D array of piecesOBjects or nulls
type Board = (PieceObjectType | null)[][];

interface BoardProps {
  onTurnSwitch: () => void;
  currentPlayer: string;
}

//Initial Board Layout Set Up
const INITIAL_BOARD: Board = [
  [
    { player: "Player 2", pieceType: "Rook", position: { row: 0, col: 0 } },
    { player: "Player 2", pieceType: "Knight", position: { row: 0, col: 1 } },
    { player: "Player 2", pieceType: "Bishop", position: { row: 0, col: 2 } },
    { player: "Player 2", pieceType: "Queen", position: { row: 0, col: 3 } },
    { player: "Player 2", pieceType: "King", position: { row: 0, col: 4 } },
    { player: "Player 2", pieceType: "Bishop", position: { row: 0, col: 5 } },
    { player: "Player 2", pieceType: "Knight", position: { row: 0, col: 6 } },
    { player: "Player 2", pieceType: "Rook", position: { row: 0, col: 7 } },
  ],
  [
    { player: "Player 2", pieceType: "Pawn", position: { row: 1, col: 0 } },
    { player: "Player 2", pieceType: "Pawn", position: { row: 1, col: 1 } },
    { player: "Player 2", pieceType: "Pawn", position: { row: 1, col: 2 } },
    { player: "Player 2", pieceType: "Pawn", position: { row: 1, col: 3 } },
    { player: "Player 2", pieceType: "Pawn", position: { row: 1, col: 4 } },
    { player: "Player 2", pieceType: "Pawn", position: { row: 1, col: 5 } },
    { player: "Player 2", pieceType: "Pawn", position: { row: 1, col: 6 } },
    { player: "Player 2", pieceType: "Pawn", position: { row: 1, col: 7 } },
  ],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [
    { player: "Player 1", pieceType: "Pawn", position: { row: 6, col: 0 } },
    { player: "Player 1", pieceType: "Pawn", position: { row: 6, col: 1 } },
    { player: "Player 1", pieceType: "Pawn", position: { row: 6, col: 2 } },
    { player: "Player 1", pieceType: "Pawn", position: { row: 6, col: 3 } },
    { player: "Player 1", pieceType: "Pawn", position: { row: 6, col: 4 } },
    { player: "Player 1", pieceType: "Pawn", position: { row: 6, col: 5 } },
    { player: "Player 1", pieceType: "Pawn", position: { row: 6, col: 6 } },
    { player: "Player 1", pieceType: "Pawn", position: { row: 6, col: 7 } },
  ],
  [
    { player: "Player 1", pieceType: "Rook", position: { row: 7, col: 0 } },
    { player: "Player 1", pieceType: "Knight", position: { row: 7, col: 1 } },
    { player: "Player 1", pieceType: "Bishop", position: { row: 7, col: 2 } },
    { player: "Player 1", pieceType: "Queen", position: { row: 7, col: 3 } },
    { player: "Player 1", pieceType: "King", position: { row: 7, col: 4 } },
    { player: "Player 1", pieceType: "Bishop", position: { row: 7, col: 5 } },
    { player: "Player 1", pieceType: "Knight", position: { row: 7, col: 6 } },
    { player: "Player 1", pieceType: "Rook", position: { row: 7, col: 7 } },
  ],
];
export default function Board({ onTurnSwitch }: BoardProps) {
  const [board, setBoard] = useState(INITIAL_BOARD);
  const [selectedPiece, setSelectedPiece] = useState<{
    piece: PieceObjectType;
    position: PositionType;
  } | null>(null);

  const handleUserClick = (position: PositionType) => {
    const { row, col } = position;
    const clickedPiece = board[row][col];

    // Deselect when same Tile Isc Clicked
    if (
      selectedPiece &&
      selectedPiece.position.row === row &&
      selectedPiece.position.col === col
    ) {
      setSelectedPiece(null);
      return;
    }

    // Select piece none are selected
    if (!selectedPiece && clickedPiece) {
      setSelectedPiece({ piece: clickedPiece, position });
      return;
    }

    if (selectedPiece) {
      const { piece, position: currentPos } = selectedPiece;

      // Check if the move is valid
      if (isValidMove(piece, currentPos, position, board)) {
        const newBoard = board.map((row) => [...row]);
        newBoard[currentPos.row][currentPos.col] = null;
        newBoard[row][col] = piece;

        setBoard(newBoard);
        setSelectedPiece(null);
        onTurnSwitch(); //Player Turn Is Updated in App.tsx
      } else {
        // Invalid move
        console.warn("Invalid move attempted.");
      }
    }
  };

  //Board Render using Tile.tsx
  return (
    <div>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((tileObject, colIndex) => (
            <Tile
              key={`${rowIndex}-${colIndex}`}
              piece={tileObject}
              position={{ row: rowIndex, col: colIndex }}
              tileColor={(rowIndex + colIndex) % 2 === 0}
              isSelected={
                selectedPiece?.position.row === rowIndex &&
                selectedPiece?.position.col === colIndex
              }
              positionCallBack={handleUserClick}
            />
          ))}
        </div>
      ))}
      <div className="flex justify-center ">
        <button className="bg-red-400 py-2 mt-10 px-6 rounded-md">
          RESET BOARD
        </button>
      </div>
    </div>
  );
}
