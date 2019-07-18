# Iterable Object

# Example

```javascript
import { entries, keys, values } from "iterable-object";

const obj = { a: 1, b: 2 }; // raw object
const valuesObj = { ...obj, ...values }; // object with spreaded values from iterable-object
const keysObj = { ...obj, ...keys }; // object with spreaded values from iterable-object
const entriesObj = { ...obj, ...entries }; // object with spreaded values from iterable-object

console.log([...obj]); // ERROR
console.log([...valuesObj]); // [1, 2]
console.log([...keysObj]); // ['a', 'b']
console.log([...entriesObj]); // [['a', 1], ['b', 2]]

for (let value of { ...obj, ...values }) {
  console.log(value);
}
// Output
// 1
// 2

for (let key of { ...obj, ...keys }) {
  console.log(key);
}
// Output
// 'a'
// 'b'

for (let entry of { ...obj, ...entries }) {
  console.log(entry);
}
// Output
// ['a', 1]
// ['b', 2]
```
