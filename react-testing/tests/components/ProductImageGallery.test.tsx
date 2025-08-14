import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("should not render anything if image urls array is empty", () => {
    const testImageUrls: string[] = [];

    const { container } = render(
      <ProductImageGallery imageUrls={testImageUrls} />
    );

    expect(container).toBeEmptyDOMElement();
  });

  it("should render unordered list of images with the right src", () => {
    const testImageUrls: string[] = ["test", "test", "some src"];

    render(<ProductImageGallery imageUrls={testImageUrls} />);

    const imageList = screen.queryAllByRole("img");
    imageList.forEach((image, index) => {
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", testImageUrls[index]);
    });
  });
});
