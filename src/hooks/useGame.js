import { useReducer } from "react";
import check4Winner from "services/game.service";

function reducer(state, action) {
  switch (action.type) {
    case "made_move": {
      // Only mutate a local copy of the state
      const board2Update = [...state.board];

      if (!board2Update[action.index]) {
        board2Update[action.index] = state.turn;
      }

      return {
        board: board2Update,
        turn: state.turn === "X" ? "O" : "X",
        winner: check4Winner(board2Update, state.turn) ? state.turn : null,
      };
    }
    default:
      throw new Error("Invalid action");
  }
}

export default function useGame() {
  const [state, dispatch] = useReducer(reducer, {
    board: Array(9).fill(null),
    turn: "X",
  });

  const makeMove = (event) => {
    dispatch({ type: "made_move", index: event.target.id });
  };

  const { board, winner } = state;

  return {
    board,
    winner,
    makeMove,
  };
}
