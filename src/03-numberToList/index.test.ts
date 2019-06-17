import numberToList from "./";

describe("numberToList", () => {
  it("should take a number and make a list", () => {
    const result = numberToList(99834);
    expect(result).toEqual([9, 9, 8, 3, 4]);
  });

  it("should take a number and make a list ignoring decimals", () => {
    const result = numberToList(99.834);
    expect(result).toEqual([9, 9, 8, 3, 4]);
  });

  // extra credit:
  // what if the function took strings?
  // it("should take a string and make a list", () => {
  //   const result = numberToList("Hello");
  //   expect(result).toEqual(["H", "e", "l", "l", "o"]);
  // });
  // it("should take a string and make a list ignoring spaces", () => {
  //   const result = numberToList("Hello World");
  //   expect(result).toEqual(["H", "e", "l", "l", "o", "W", "o", "r", "l", "d"]);
  // });
});
