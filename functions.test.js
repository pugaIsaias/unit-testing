const functions = require("./functions");

test("Add 2+ 2 to equals 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Add 2+2 to NOT equals 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});
