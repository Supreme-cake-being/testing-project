import fs from "fs";
import path from "path";

import { it, expect, describe, vi, beforeEach } from "vitest";
import { Window } from "happy-dom";
import { showError } from "./dom";

const htmlPath = path.join(process.cwd(), "index.html");
const htmlContent = fs.readFileSync(htmlPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlContent);
vi.stubGlobal("document", document);

describe("showError", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    document.write(htmlContent);
  });

  it("should add an error paragraph to the id='errors' element", () => {
    showError("test");

    const errorEl = document.getElementById("errors");
    const errorParagraph = errorEl.firstElementChild;

    expect(errorParagraph).not.toBeNull();
  });

  it("shoul not contain an error paragraph initially", () => {
    const errorEl = document.getElementById("errors");
    const errorParagraph = errorEl.firstElementChild;

    expect(errorParagraph).toBeNull();
  });

  it("should output provided message in the error paragraph", () => {
    const errorMessage = "Test error message";
    showError(errorMessage);

    const errorEl = document.getElementById("errors");
    const errorParagraph = errorEl.firstElementChild;

    expect(errorParagraph.textContent).toBe(errorMessage);
  });
});
