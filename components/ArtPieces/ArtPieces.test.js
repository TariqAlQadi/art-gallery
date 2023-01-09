import ArtPieces from "./ArtPieces";
import { render, screen } from "@testing-library/react";

const testPieces = [{ title: "name", artist: "Artist" }];

test("render list of ArtPieces", () => {
  render(<ArtPieces pieces={testPieces} />);

  const list = screen.getByRole("list", { title: "name" });
  expect(list).toBeInTheDocument();
});
