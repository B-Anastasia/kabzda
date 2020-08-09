import { HIDDEN_ACCORDION, reducer } from "./reducer";

describe("toggle state value hidden by action type", () => {
  it("should return new object with true value ", () => {
    expect(reducer({ hidden: false }, { type: HIDDEN_ACCORDION })).toEqual({
      hidden: true,
    });
  });
  it("should return new object with true value ", () => {
    expect(reducer({ hidden: true }, { type: HIDDEN_ACCORDION })).toEqual({
      hidden: false,
    });
  });
  it("should throw new Error when type is incorrect ", () => {
    expect(() => {
      reducer({ hidden: true }, { type: "NOTCORRECTTYPE" });
    }).toThrowError();
  });
});
