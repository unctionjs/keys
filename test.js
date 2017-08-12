/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
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
