/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

function add(n1, n2) {
  return n1 + n2;
}

const add2 = (n1, n2) => n1 + n2;

function sub(n1, n2) {
  return n1 - n2;
}

const sub2 = (n1, n2) => n1 - n2;

function div(n1, n2) {
  return n1 / n2;
}

const div2 = (n1, n2) => n1 / n2;

function mul(n1, n2) {
  return n1 * n2;
}

const mul2 = (n1, n2) => n1 * n2;

console.log("hello from the SUM exercise");
/* 
  TODO: create a function that console logs the result of any of the above operations.
*/
console.log(`Sum of 10 and 20 = ${add(10, 20)}`);
console.log(`Sum of 100 and 200 = ${add2(100, 200)}`);
console.log(`Sub of 10 and 20 = ${sub(10, 20)}`);
console.log(`Sub of 100 and 200 = ${sub2(100, 200)}`);
console.log(`Div of 10 and 20 = ${div(10, 20)}`);
console.log(`Div of 10 and 20 = ${div2(100, 200)}`);
console.log(`Mul of 10 and 20 = ${mul(10, 20)}`);
console.log(`Mul of 10 and 20 = ${mul2(100, 200)}`);
