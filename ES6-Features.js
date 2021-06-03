const PI = 3.14;
console.log(PI > 3.0)

const a = [1,2,3,4,5,10]
const b = ['a','b','c','d']
for (let i = 0; i < a.length; i++) {
  let x = a[i];
  console.log(x)
  
}

for (let i = 0; i < b.length; i++) {
  let y = b[i];
  console.log(y)
  
}

let callbacks = []

for (let i = 0; i < 2; i++) {
  callbacks[i] = function() {
    return i*2
  }
  
}

console.log('test',callbacks[0] === 2)


{
  function foo(){return 1}
  console.log(foo() === 1)
  {
    function foo() { return 2}
   console.log('t', foo() === 2 )
  }
  console.log(foo() === 1)
}

let odds = a.map(v => v + 1)
let pairs = a.map(v =>({even : v , odd : v + 1}) )
let nums = a.map((v,i) => v + i)


console.log(odds)
console.log(pairs)
console.log(nums)


let fives = [];
a.forEach(v => {
  if(v % 5 === 0) fives.push(v)
})

console.log('output',fives)

function f(x,y=7,z=42) {
  return x + y+ z
}

console.log(f(1) === 50)

function f1(x,y,...a){
  console.log('spread args',a)
  return (x+y)*a.length
}

console.log('..spread op',f1(1,2,"hello",true,7) === 9)

var params = ["hello",true,7]
var other = [1,2,...params] // // [ 1, 2, "hello", true, 7 ]

function f3(x,y,...a2){
  return (x+y)*a2.length
}

console.log(f3(1,2,...params)===9) // true

var str = "foo"

console.log([...str])

var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`

console.log(message)

var x = 0 , y = 0

var obj = {x,y}

console.log(obj)

function * generatorFunction() { // Line 1
  console.log('This will be executed first.');
  yield 'Hello, ';   // Line 2
  console.log('I will be printed after the pause');  
  yield 'World!';
}
const generatorObject = generatorFunction(); // Line 3
console.log(generatorObject.next().value); // Line 4
console.log(generatorObject.next().value); // Line 5
console.log(generatorObject.next().value); // Line 6


console.log(`Destructing Assign`)

var list = [1,2,3]

var [a1,,b1] = list

[b1,a1] = [a1,b1]

console.log([a,b])


export function sum (x, y) { return x + y }
export var pi = 3.141593

//  someApp.js
import * as math from "lib/math"
console.log("2π = " + math.sum(math.pi, math.pi))

//  otherApp.js
import { sum, pi } from "lib/math"
console.log("2π = " + sum(pi, pi))

// class Rectangle extends Shape {
//   constructor (id, x, y, width, height) {
//       super(id, x, y)
//       this.width  = width
//       this.height = height
//   }
// }


// let s = new Set()
// s.add('hello').add('goodbye').add('hello')

// console.log(s)

// let m = new Map()
// let s = Symbol()
// m.set("hello", 42)
// m.set(s, 34)
// m.get(s) === 34
// m.size === 2
// for (let [ key, val ] of m.entries())
//     console.log(key + " = " + val)

console.log([1,2,3].find(x => x > 3))
