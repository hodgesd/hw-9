import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Tic Tac Toe", () => {
  render(<App />);

  const squares = screen.getAllByRole("button");

  expect(squares).toHaveLength(9);
});
