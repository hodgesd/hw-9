import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Square from "./Square";

describe("Square", () => {
  it("renders a square with a marker and the correct id", () => {
    render(<Square marker="X" id={0} handleClick={() => {}} />);
    const square = screen.getByRole("button", { name: "X" });

    expect(square).toHaveAttribute("id", "0");
  });

  it("renders a square without a marker", () => {
    render(<Square id={0} handleClick={() => {}} />);
    const square = screen.getByRole("button");

    expect(square).toHaveAttribute("id", "0");
  });

  it("calls the the click handler function whenever clicked", async () => {
    const ID = 0;

    const handleClick = jest.fn();
    const user = userEvent.setup();

    render(<Square id={ID} handleClick={handleClick} />);

    const square = screen.getByRole("button");

    // Simulating a click event happens asynchronously
    await user.click(square);

    expect(handleClick).toBeCalled();
  });
});
