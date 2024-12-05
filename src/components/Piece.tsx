// Piece Component
// Role: Render pieces with symbols and colors based on player and chess piece.

import { PieceObjectType } from "./Board";

interface PieceProps {
  piece: PieceObjectType | null;
}

const symbols: Record<PieceObjectType["pieceType"], string> = {
  Pawn: "♙",
  Rook: "♖",
  Knight: "♘",
  Bishop: "♗",
  Queen: "♕",
  King: "♔",
};

const Piece: React.FC<PieceProps> = ({ piece }) => {
  if (!piece) return null;

  return (
    <div
      className={`text-5xl  ${
        piece.player == "Player 1" ? `text-white` : `text-black`
      }`}
    >
      {symbols[piece.pieceType]}
    </div>
  );
};

export default Piece;
