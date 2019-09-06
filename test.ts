/* eslint-disable no-magic-numbers */
import keys from "./index.ts";

test(() => {
  expect(keys({
    aaa: "111",
    bbb: "222",
  })).toEqual(["aaa", "bbb"]);
});

test(() => {
  expect(keys([
    "aaa",
    "bbb",
  ])).toEqual([0, 1]);
});
