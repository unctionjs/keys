# @unction/keys

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string => Array<B>

Takes a keyed iterable and returns the keys as an Array.

``` javascript
keys({aaa: "111", bbb: "222"}) // ["aaa", "bbb"]
keys(["111", "222"]) // [0, 1]
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/keys.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/keys.svg?maxAge=2592000&style=flat-square
