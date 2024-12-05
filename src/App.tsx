// App Component
// Role: Holding Board Component and offering Information About Game
// State Management:  managing player turns and rendering the chessboard

import "./App.css";
import "./index.css";
import Board from "./components/Board";
import { useState } from "react";

function App() {
  //P.ayer Tracking of who's Turn
  const [playerTurn, setPlayerTurn] = useState("White");

  const handleTurnSwitch = () => {
    setPlayerTurn((prevTurn) => (prevTurn === "White" ? "Black" : "White"));
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="p-3">Terros Chess Assessment</h1>
        <h1 className="bg-blue-400 rounded-lg py-2 px-6 my-2 text-white">
          {playerTurn} Make Your Next Move
        </h1>
        <div className="flex flex-none justify-center gap-5">
          <div></div>
          <Board onTurnSwitch={handleTurnSwitch} currentPlayer={playerTurn} />
        </div>
      </div>
    </>
  );
}

export default App;
