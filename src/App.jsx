import "./App.css";
import Square from "./components/Square";
import useGame from "./hooks/useGame";

function App() {
  const { board, winner, makeMove } = useGame();

  return (
    <main>
      <h1>Tic Tac Toe</h1>
      {/* Print if winner */}
      {winner && <h2>{winner} wins!</h2>}
      {/* Click to restart game */}

      <button onClick={() => window.location.reload()} type="submit">
        Restart
      </button>

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
    </main>
  );
}

export default App;
