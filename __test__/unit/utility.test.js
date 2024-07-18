const { capitalise } = require("../../utils/util");

describe("capitalise()", () => {
  test("should capitalise given string", () => {
    expect(capitalise("blue")).toBe("Blue");
  });
});
