import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders Tic Tac Toe", () => {
  render(<App />);

  const squares = screen.getAllByRole("button");

  expect(squares).toHaveLength(9);
});
