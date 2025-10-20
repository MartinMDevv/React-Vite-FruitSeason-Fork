import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import PagarPlanesPage from "../src/pages/PagarPlanes";

describe("PagarPlanesPage", () => {
  const renderWithRouter = (planId = "basico") => {
    window.history.pushState({}, "", `/PagarPlanes?plan=${planId}`);
    return render(
      <MemoryRouter initialEntries={[`/PagarPlanes?plan=${planId}`]}>
        <Routes>
          <Route path="/PagarPlanes" element={<PagarPlanesPage />} />
        </Routes>
      </MemoryRouter>
    );
  };

  it("renderiza formulario de pago", () => {
    renderWithRouter();
    expect(screen.getByText(/proceso de pago/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/nombre en la tarjeta/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/número de la tarjeta/i)).toBeInTheDocument();
  });

  it("muestra mensaje de éxito al pagar", () => {
    renderWithRouter();
    fireEvent.change(screen.getByLabelText(/nombre en la tarjeta/i), { target: { value: "Juan Perez" } });
    fireEvent.change(screen.getByLabelText(/número de la tarjeta/i), { target: { value: "12345678" } });
    fireEvent.click(screen.getByRole("button", { name: /pagar ahora/i }));
    expect(screen.getByText(/¡todo fue correcto!/i)).toBeInTheDocument();
  });
});