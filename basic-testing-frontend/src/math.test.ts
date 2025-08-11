import { describe, expect, it } from "vitest";
import { add } from "./math";

describe("math.js", () => {
  it("should summarize all number values in the array", () => {
    const numbers = [1, 2, 3];
    const expectedResult = numbers.reduce((prev, current) => prev + current, 0);

    const result = add(numbers);

    expect(result).toBe(expectedResult);
  });

  it("should yield NaN if at least one invalid number is provided", () => {
    const inputs = [1, 2, "invalid"];

    const result = add(inputs);

    expect(result).toBeNaN();
  });

  it("shiuld yield a correct sum if an array of numeric string values is provided", () => {
    const numbers = ["1", "2"];
    const expectedResult = numbers.reduce(
      (prev, current) => +prev + +current,
      0
    );

    const result = add(numbers);

    expect(result).toBe(expectedResult);
  });

  it("shiuld yield a correct sum if an array of float values is provided", () => {
    const numbers = [1, 2.25, 3.5];
    const expectedResult = numbers.reduce(
      (prev, current) => +prev + +current,
      0
    );

    const result = add(numbers);

    expect(result).toBe(expectedResult);
  });

  it("should yield 0 if an empty array is provided", () => {
    const numbers = [];
    const expectedResult = 0;

    const result = add(numbers);

    expect(result).toBe(expectedResult);
  });

  it("should throw an error if no value is provided", () => {
    const resultFn = () => {
      add();
    };

    expect(resultFn).toThrow();
  });
});
