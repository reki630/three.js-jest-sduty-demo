import sumTest from "./sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sumTest(1, 2)).toBe(3);
});
