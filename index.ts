import flip from "@unction/flip";
import append from "@unction/append";
import reduceKeys from "@unction/reducekeys";
import {KeyedEnumerableType} from "./types";

export default function keys<A, B> (keyed: KeyedEnumerableType<A, B>): Array<B> {
  return reduceKeys(
    flip(append)
  )(
    []
  )(
    keyed
  );
}
