import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

describe("UserAccount", () => {
  it("should not render Edit button if user is not an admin", () => {
    const testUser: User = {
      id: 1,
      name: "Test",
      isAdmin: false,
    };

    render(<UserAccount user={testUser} />);

    const button = screen.queryByRole("button");

    expect(button).not.toBeInTheDocument();
  });

  it("should render Edit button if user is an admin", () => {
    const testUser: User = {
      id: 1,
      name: "Test",
      isAdmin: true,
    };

    render(<UserAccount user={testUser} />);

    const button = screen.queryByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should render div with the user's name", () => {
    const testUser: User = {
      id: 1,
      name: "Test",
      isAdmin: true,
    };

    render(<UserAccount user={testUser} />);

    const div = screen.queryByText(testUser.name);

    expect(div).toBeInTheDocument();
    expect(div).toHaveTextContent(testUser.name);
  });
});
