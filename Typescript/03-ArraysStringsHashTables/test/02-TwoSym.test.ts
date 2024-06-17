import { twoSum } from "../src/02-TwoSum";

describe("Exercise 2", () => {
  it("should return the expected result", () => {
    expect(twoSum([9, 2, 5, 6], 7)).toStrictEqual([1, 2]);
    expect(twoSum([9, 2, 5, 6], 100)).toBe(null);
  });
});
