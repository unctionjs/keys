import flip from "@unction/flip"
import append from "@unction/append"
import reduceKeys from "@unction/reducekeys"

export default function keys (record: RecordType): Array<ValueType> {
  return reduceKeys(flip(append))([])(record)
}
