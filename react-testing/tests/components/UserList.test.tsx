import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";

describe("UserList", () => {
  it("should render no users when a users array is empty", () => {
    render(<UserList users={[]} />);

    const p = screen.queryByText(/no users/i);

    expect(p).toBeInTheDocument();
  });

  it("should render a list of users if users array is provided", () => {
    const testUsers: User[] = [
      {
        id: 1,
        name: "Test",
        isAdmin: false,
      },
      {
        id: 2,
        name: "Test",
        isAdmin: false,
      },
      {
        id: 3,
        name: "Test",
        isAdmin: false,
      },
    ];

    render(<UserList users={testUsers} />);

    const usersList = screen.queryAllByRole("listitem");
    usersList.forEach((user, index) => {
      expect(user).toBeInTheDocument();
      const link = user.querySelector("a");
      expect(link).toHaveAttribute("href", `/users/${testUsers[index].id}`);
    });
  });
});
