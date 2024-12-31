/**
 * 객체 병합하기
 * 1. spread 연산자
 * 2. Object.assign
 * @description
 * assign 인자의 개수에 제한이 없고, 첫번째 인자는 대상 객체이다.
 * 대상 객체가 되면, 객체 전이가 일어난다.
 * 동일 키에 대해 뒤에 있는 객체의 값이 우선되기 때문에 인자의 순서가 중요하다.
 */

let person = {name: "John", age: 30};
let address = {city: "New York", country: "USA"};

let merged = {...person, ...address};
let merged2 = Object.assign({}, person, address);
let merged3 = Object.assign(person, address); // person 객체가 변경된다.

console.log(merged);
console.log(merged2);
console.log(merged3);
