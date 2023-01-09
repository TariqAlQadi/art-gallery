import Spotlight from ".";
import { render, screen } from "@testing-library/react";

test("render the art piece image", () => {
  render(<Spotlight title="hallo" artist="john" />);

  const title = screen.getByText("hallo");
  const artist = screen.getByText("john");
  expect(title).toBeInTheDocument();
  expect(artist).toBeInTheDocument();
});
