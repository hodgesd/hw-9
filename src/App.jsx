import "./App.css";
import Square from "./components/Square";
import useGame from "./hooks/useGame";

function App() {
  const { board, winner, makeMove } = useGame();

  return (
    <main>
      <h1>Tic Tac Toe</h1>
      {/* Print if winner in red text */}
      <div className=" flex flex-col items-center text-ellipsis text-red-600">
        {winner && <h2>{winner} wins!</h2>}
      </div>

      {/* Click to restart game */}

      <div className="board">
        {board.map((square, index) => (
          // Actually pass in the dumb, stupid marker (square)
          <Square
            key={index}
            id={index}
            handleClick={makeMove}
            marker={square}
          />
        ))}
      </div>

      {winner && (
        <div className="flex flex-col items-center">
          <button
            className="mb-5 text-4xl font-bold text-gray-700"
            onClick={() => window.location.reload()}
            type="submit"
          >
            New Game
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
