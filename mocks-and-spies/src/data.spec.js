import { describe, expect, it, vi } from "vitest";
import { generateReportData } from "./data";

describe("generateReportData", () => {
  it("should execute logFn if provided", () => {
    const logFn = vi.fn();

    generateReportData(logFn);

    expect(logFn).toBeCalled();
  });
});
