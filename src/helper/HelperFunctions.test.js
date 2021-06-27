import { makeLowerCase, multiply } from "./HelperFunctions";

test("multiply", () => {
  expect(multiply(2, 10)).toBe(20);
  expect(multiply(6, -2)).toBe(-12);
});

test("lowerCase", () => {
  expect(makeLowerCase("ABHIJIT")).toBe("abhijit");
  expect(makeLowerCase("ShShJ")).toBe("shshj");
});