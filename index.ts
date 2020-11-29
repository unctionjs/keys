import flip from "@unction/flip";
import append from "@unction/append";
import reduceKeys from "@unction/reducekeys";

export default function keys<A, B> (keyed: KeyedEnumerableType<A, B>): Array<B> {
  return reduceKeys(
    flip(append)
  )(
    []
  )(
    keyed
  );
}
