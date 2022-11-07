import { useReducer } from "react";
import check4Winner from "services/game.service";

function reducer(state, action) {
  switch (action.type) {
    case "made_move": {
      // Only mutate a local copy of the state
      const board2Update = [...state.board];

      if (!board2Update[action.index] && !state.winner) {
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

function randomStart() {
  const randInt = Math.round(Math.random());
  return randInt ? "X" : "O";
}

export default function useGame() {
  const [state, dispatch] = useReducer(reducer, {
    board: Array(9).fill(null),
    turn: randomStart(),
  });

  const makeMove = (event) => {
    if (state.winner) {
      return;
    }
    dispatch({ type: "made_move", index: event.target.id });
  };

  const { board, turn, winner } = state;

  return {
    board,
    turn,
    winner,
    makeMove,
  };
}
