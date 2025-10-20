import { render, screen } from "@testing-library/react";
import FruitCard from "../src/components/FruitCard";

describe("FruitCard", () => {
  const fruit = {
    name: "Manzana",
    image: "manzana.jpg",
    description: "Fruta roja y dulce"
  };

  it("renderiza información de la fruta", () => {
    render(<FruitCard fruit={fruit} />);
    expect(screen.getByText("Manzana")).toBeInTheDocument();
    expect(screen.getByText("Fruta roja y dulce")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "manzana.jpg");
  });
});