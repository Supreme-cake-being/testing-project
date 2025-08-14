import { render, screen } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("ExpandableText", () => {
  // if < 255 rendered
  it("should render article with the provided text if it is less than 255 characters long ", () => {
    const testText: string = "Test";

    render(<ExpandableText text={testText} />);

    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();
    expect(article).toHaveTextContent(testText);
    expect(article).not.toHaveTextContent("...");
  });

  // otherwise truncated
  it("should render article with a truncated text if it is more than 255 characters long", async () => {
    const testText: string =
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora sint blanditiis accusamus corporis quam voluptatum totam commodi earum, molestiae iure vitae accusantium id suscipit, at expedita minima rem fuga ea a, corrupti praesentium autem tenetur veritatis inventore. Aliquid, eaque? Dolores eveniet quos natus quam minus architecto tenetur optio cumque unde?";

    render(<ExpandableText text={testText} />);

    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();
    expect(article).toHaveTextContent(/lorem ipsum dolor/i);
    expect(article).toHaveTextContent("...");

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/show more/i);

    const user = userEvent.setup();
    await user.click(button);
    expect(button).toHaveTextContent(/show less/i);

    expect(article).toHaveTextContent(testText);
    expect(article).not.toHaveTextContent("...");
  });
});
