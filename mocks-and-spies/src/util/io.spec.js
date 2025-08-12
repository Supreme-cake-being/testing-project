import { describe, expect, it, vi } from "vitest";
import { promises as fs } from "fs";
import path, { join } from "path";

import writeData from "./io";

vi.mock("fs");
vi.mock("path", () => {
  return { default: { join: (...args) => args[args.length - 1] } };
});

describe("writeData", () => {
  it("should execute writeFile method", () => {
    const testData = "Test";
    const testFilename = "test.txt";

    writeData(testData, testFilename);

    // expect(fs.writeFile).toBeCalled();
    expect(fs.writeFile).toBeCalledWith(testFilename, testData);
  });
});
