import { it, describe, expect } from "vitest";
import { validateNotEmpty } from "./validation";

describe("validateNotEmpty", () => {
  it("should throw an error if an empty string is provided", () => {
    const input = "";

    const validateFn = () => validateNotEmpty(input);

    expect(validateFn).toThrow();
  });

  it("should throw an error if a string of blanks is provided", () => {
    const input = " ";

    const validateFn = () => validateNotEmpty(input);

    expect(validateFn).toThrow();
  });

  it("should throw an error the provided error message", () => {
    const input = "";
    const errorMessage = "Test error message";

    const validateFn = () => validateNotEmpty(input, errorMessage);

    expect(validateFn).toThrow(errorMessage);
  });
});
