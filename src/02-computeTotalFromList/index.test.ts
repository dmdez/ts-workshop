import computeTotalFromList from "./";

describe("computeTotalFromList", () => {
  it("empty list should return zero", () => {
    const result = computeTotalFromList([]);
    expect(result).toEqual(0);
  });

  it("add list with numbers together", () => {
    const result = computeTotalFromList([5, 3, 5, 10]);
    expect(result).toEqual(23);
  });

  it("add list with some negative numbers together", () => {
    const result = computeTotalFromList([5, -3, 5, 10]);
    expect(result).toEqual(17);
  });

  // Extra:
  // What if we limited the function to only 10 numbers?
});
