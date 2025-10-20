import { render, screen } from "@testing-library/react";
import Alert from "../src/components/Alert";

describe("Alert", () => {
  it("no renderiza nada si no hay mensaje", () => {
    const { container } = render(<Alert />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renderiza mensaje de error", () => {
    render(<Alert message="Error" />);
    expect(screen.getByText("Error")).toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveClass("alert-danger");
  });

  it("renderiza mensaje de éxito", () => {
    render(<Alert message="Éxito" type="success" />);
    expect(screen.getByText("Éxito")).toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveClass("alert-success");
  });
});