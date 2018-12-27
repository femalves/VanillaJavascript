// Create a symbol

const sym1 = Symbol();
const sym2 = Symbol('sym2');

console.log(typeof sym2);

console.log(Symbol('123') === Symbol('123')); // False

console.log(`Hello ${String(sym1)}`);

// Unique object keys

const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};


myObj[KEY1] = 'Prop1';
myObj.key2 = 'Prop3';

// Symbols are not enumerable in for...in
for(let i in myObj) {
    console.log(`${i}: ${myObj[i]}`);
}

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringigy({[Symbol('sym1')]: 'prop'}));


