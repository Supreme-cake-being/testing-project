import { it, describe, expect, vi } from "vitest";
import { extractPostData } from "./posts";

describe("savePost", () => {
  it("should extract title and content from the provided data", () => {
    const testTitle = "test";
    const testContent = "test";

    const testFormData = {
      title: testTitle,
      content: testContent,
      get(identifier) {
        return this[identifier];
      },
    };

    const data = extractPostData(testFormData);

    expect(data.title).toBe(testTitle);
    expect(data.content).toBe(testContent);
  });
});
