const WINNING_INDICES = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

/**
 * Calculate if there is a winner in a Tic-Tac-Toe game.
 * @param {string[]} board - Contains either "X", "O" or "" to represent 9 spots on the board
 * @param {string} - Either "X" or "O".
 * @returns {boolean} Whether the player is the winner.
 */
export default (board, letter) =>
  WINNING_INDICES.some((winningIndices) =>
    winningIndices.every((winningIndex) => board[winningIndex] === letter)
  );
