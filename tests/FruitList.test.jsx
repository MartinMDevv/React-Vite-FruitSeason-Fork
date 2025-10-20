import { render, screen } from "@testing-library/react";
import FruitList from "../src/components/FruitList";

describe("FruitList", () => {
  const fruits = [
    { name: "Manzana", image: "manzana.jpg", description: "Fruta roja" },
    { name: "Pera", image: "pera.jpg", description: "Fruta verde" }
  ];
  const season = { icon: "🍎", title: "Frutas de temporada" };

  it("renderiza todas las frutas", () => {
    render(<FruitList fruits={fruits} season={season} />);
    expect(screen.getByText("Manzana")).toBeInTheDocument();
    expect(screen.getByText("Pera")).toBeInTheDocument();
  });
});