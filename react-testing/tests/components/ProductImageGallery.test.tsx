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

    const imageList = screen.queryAllByRole("listitem");
    imageList.forEach((image, index) => {
      expect(image).toBeInTheDocument();
      const img = image.querySelector("img");
      expect(img).toHaveAttribute("src", testImageUrls[index]);
    });
  });
});
