import { describe, expect, it } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

describe("generateToken", () => {
  it("should generate a token value", (done) => {
    const testEmail = "test@test.com";

    generateToken(testEmail, (err, token) => {
      try {
        expect(token).toBeDefined();
        done();
      } catch (error) {
        done(err);
      }
    });
  });
});

describe("generateTokenPromise", () => {
  it("should generate a token value", async () => {
    const testEmail = "test@test.com";

    const token = await generateTokenPromise(testEmail);

    expect(token).toBeDefined();
  });
});
