import { isUnique } from "../src/01-is-unique";

describe("Exercise 1", () => {
  it("should return the expected result", () => {
    expect(isUnique("abcde")).toBe(true);
    expect(isUnique("aAbBcCdDeE")).toBe(true);
    expect(isUnique("abcded")).toBe(false);
  });
});
