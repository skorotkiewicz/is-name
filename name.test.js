const { isName, matchName } = require("./index");

test("Multiple human name", () => {
  expect(isName("Sebastian Peter Korotkiewicz")).toBe(true);
});

test("Apple is not human name", () => {
  expect(isName("Apple")).toBe(false);
});

test("is human name", () => {
  expect(isName("Sebastian Korotkiewicz")).toBe(true);
});

test("get human name", () => {
  expect(matchName("Hello I'm Sebastian Korotkiewicz and you?")).toContain(
    "Sebastian Korotkiewicz"
  );
});

test("get multiple human name", () => {
  expect(
    matchName("Hello I'm Sebastian Peter Korotkiewicz and you?")
  ).toContain("Sebastian Peter Korotkiewicz");
});

test("string contain no human names", () => {
  expect(matchName("Hello I'm Apple and you?")).toBe(false);
});
