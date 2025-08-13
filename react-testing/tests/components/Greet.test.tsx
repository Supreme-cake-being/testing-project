import { render, screen } from "@testing-library/react";

import Greet from "../../src/components/Greet";

describe("Greet", () => {
  it("should render Hello with the name when name is provided", () => {
    const testName = "Test name";

    render(<Greet name={testName} />);

    const h1 = screen.getByRole("heading");

    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent(`Hello ${testName}`);
  });

  it("should render Login button when name is not provided", () => {
    render(<Greet />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
