import flip from "@unction/flip";
import append from "@unction/append";
import reduceKeys from "@unction/reducekeys";

export default function keys (keyed) {
  return reduceKeys(flip(append))([])(keyed);
}
