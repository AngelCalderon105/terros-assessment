// Tile Component
// Role:Render Each Tile and Pieve Object within

import { PieceObjectType } from "./Board";
import Piece from "./Piece";

interface TileProps {
  tileColor: boolean;
  position: { row: number; col: number };
  piece: PieceObjectType | null;
  isSelected: boolean;
  positionCallBack: (position: { row: number; col: number }) => void;
}

const Tile: React.FC<TileProps> = ({
  position,
  piece,
  tileColor,
  isSelected,
  positionCallBack,
}) => {
  return (
    <div
      className={`w-16 h-16 flex items-center justify-center ${
        tileColor ? "bg-gray-600" : "bg-slate-700"
      }
    ${isSelected ? "border-2 border-solid border-yellow-400" : ""}`}
      onClick={() => positionCallBack(position)}
    >
      <Piece piece={piece} />
    </div>
  );
};

export default Tile;
