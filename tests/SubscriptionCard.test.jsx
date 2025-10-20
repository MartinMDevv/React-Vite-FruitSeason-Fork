import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SubscriptionCard from "../src/components/SubscriptionCard";

describe("SubscriptionCard", () => {
  const plan = {
    id: "basico",
    title: "Plan Básico",
    price: "$12.990/mes",
    features: ["Caja pequeña", "3-4 variedades", "4 kg aprox."]
  };

  it("renderiza datos del plan", () => {
    render(
      <MemoryRouter>
        <SubscriptionCard plan={plan} />
      </MemoryRouter>
    );
    expect(screen.getByText("Plan Básico")).toBeInTheDocument();
    expect(screen.getByText("$12.990/mes")).toBeInTheDocument();
    expect(screen.getByText("✅ Caja pequeña")).toBeInTheDocument();
  });

  it("tiene botón de suscribirse", () => {
    render(
      <MemoryRouter>
        <SubscriptionCard plan={plan} />
      </MemoryRouter>
    );
    expect(screen.getByRole("button", { name: /suscribirse/i })).toBeInTheDocument();
  });
});