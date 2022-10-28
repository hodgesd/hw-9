import "./App.css";
import Square from "./components/Square";
import useGame from "./hooks/useGame";

function App() {
  const { board, winner, makeMove } = useGame();

  return (
    <main>
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
