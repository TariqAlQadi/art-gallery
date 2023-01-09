import ArtPieces from "./ArtPieces";
import { render, screen } from "@testing-library/react";

test("render list of ArtPieces", () => {
    render(<ArtPieces pieces={} />);
    const liste = screen.getByRole();
    expect(liste).toBeInTheDocument();
});









/*
test("renders the image", ()=> {
    const image = "/img/mona-lisa.jpg";
    const { getByAltText } = render(<ArtPiecePreview image={image} />);
    const imageElement = getByAltText("Mona Lisa");
    expect(imageElement).toBeInTheDocument();
 })
 */