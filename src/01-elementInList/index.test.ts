import elementInList from "./";

describe("elementInList", () => {
  it("element does not occur in a list", () => {
    const list = ["Foo", "Hello", "World", "Abracadabra"];
    const result = elementInList("Foobarbaz", list);
    expect(result).toEqual(false);
  });

  it("element occurs in a list", () => {
    const list = ["Foo", "Foobarbaz", "World", "Abracadabra"];
    const result = elementInList("Foobarbaz", list);
    expect(result).toEqual(true);
  });
});
