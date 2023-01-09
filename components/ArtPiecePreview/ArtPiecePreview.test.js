import ArtPiecePreview from ".";
import { render, screen } from "@testing-library/react";

test("render img, artist and title", () => {
    
    render(<ArtPiecePreview image="https://example-apis.vercel.app/assets/art/blue-and-red.jpg" title="Blue and Red" artist="Jung-Hua Lui" />);

    const image = screen.getByAltText("Blue and Red");
    const artist = screen.getByText("Jung-Hua Lui");
    const title = screen.getByText("Blue and Red");

    expect(image).toBeInTheDocument();
    expect(artist).toBeInTheDocument();
    expect(title).toBeInTheDocument();
});
