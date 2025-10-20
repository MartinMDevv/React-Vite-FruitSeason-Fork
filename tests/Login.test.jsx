import { render, screen, fireEvent } from "@testing-library/react";
import { act } from 'react';
import { MemoryRouter } from "react-router-dom";
import Login from "../src/pages/Login";

describe("Login", () => {
  it("renderiza campos de usuario y contraseña", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    expect(screen.getByLabelText(/usuario/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contraseña/i)).toBeInTheDocument();
  });

  it("muestra errores si los campos están vacíos al enviar", async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /ingresar/i }));
    });

    const messages = await screen.findAllByText(/El usuario es obligatorio|La contraseña es obligatoria/i);
    expect(messages.length).toBeGreaterThanOrEqual(2);
  });
});