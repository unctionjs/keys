/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"

import keys from "./source.js"

test(({same, end}) => {
  same(
    keys({
      aaa: "111",
      bbb: "222",
    }),
    ["aaa", "bbb"]
  )

  end()
})

test(({same, end}) => {
  same(
    keys([
      "aaa",
      "bbb",
    ]),
    [0, 1]
  )

  end()
})
