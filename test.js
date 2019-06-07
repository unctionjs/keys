/* eslint-disable no-magic-numbers */
import {test} from "tap";

import keys from "./index";

test(({same, end}) => {
  same(
    keys({
      aaa: "111",
      bbb: "222",
    }),
    ["aaa", "bbb"]
  );

  end();
});

test(({same, end}) => {
  same(
    keys([
      "aaa",
      "bbb",
    ]),
    [0, 1]
  );

  end();
});
