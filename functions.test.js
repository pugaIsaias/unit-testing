const functions = require("./functions");

test("Add 2+ 2 to equals 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Add 2+2 to NOT equals 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// to be Falsy
test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

//toEqual
test("User should be Isaias Puga", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Isaias",
    lastName: "Puga",
  });
});

//Less than and greater than
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

test("Should be under or equal 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//regex

test("There is not I in team", () => {
  expect("team").not.toMatch(/I/);
});

//arrays
test("Username should contain admin", () => {
  const username = ["steve", "jorge", "admin"];
  expect(username).toContain("admin");
});

// working with async data
test("User fetch name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});
