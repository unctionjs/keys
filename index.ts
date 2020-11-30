import flip from "@unction/flip";
import append from "@unction/append";
import reduceKeys from "@unction/reducekeys";

export default function keys<A, B> (keyed: Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string): Array<B> {
  return reduceKeys(
    flip(append)
  )(
    []
  )(
    keyed
  );
}
