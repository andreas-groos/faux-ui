import { getColorForText } from "./utils";

describe("should return a stable color for a string", () => {
  test("should return #bef264 for `a`", () => {
    expect(getColorForText("a", 500)).toBe("#84cc16");
    expect(getColorForText("a", 300)).toBe("#bef264");
    expect(getColorForText("a", 400)).not.toBe("#bef264");
  });
  test("should return #86efac for `b`", () => {
    expect(getColorForText("b", 500)).toBe("#22c55e");
  });
});
