/* eslint-disable no-magic-numbers */
import keys from "./index";

test("works", () => {
  expect(keys({
    aaa: "111",
    bbb: "222",
  })).toEqual(["aaa", "bbb"]);
});

test("works", () => {
  expect(keys([
    "aaa",
    "bbb",
  ])).toEqual([0, 1]);
});
