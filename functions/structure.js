// Arrow Functions; introduced with ES6.

// const add = (num1, num2) => {
//     const result = num1 + num2
// }

// function oldSchool(pre, name) {
//     console.log(`Good morning ${pre}. ${name}.`);
// }

// oldSchool('Mr', 'John');

// const newApp = (pre, name) => {
//     console.log(`Good morning ${pre}. ${name}.`);
// }

// newApp("Mr", "Mister");

// function add(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }

// console.log(add(5, 8));

// const addNA = (num1, num2) => num1 + num2;

// console.log(addNA(450, 550))

// const findMax = (num1, num2) => num1 > num2 ? num1 : num2;

// function findMax_extend() {

// }

// Anonymous functions; can only be used once, not multiple times. 


// Higher order and callback functions; nested functions. functions that take another function as an argument. 

const add = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const div = (num1, num2) => num1 / num2;
const mult = (num1, num2) => num1 * num2;
const pow = (num1, num2) => num1 ** num2;

//higher order function
const calculator = (num1, num2, process) => process(num1, num2);

console.log(calculator(25, 5, add));
console.log(calculator(25, 5, sub));
console.log(calculator(25, 5, div));
console.log(calculator(25, 5, mult));
console.log(calculator(25, 5, pow));

// immediately invoked functions expressions (IIFE);

// can be anon or named or arrow; definnition part and execution part ensured with () syntax. 
// result of execution (if there is a return value) can be stored in a variable. 


// exercise

const counter = (string, char) => {
    let result = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            result++;
        }
    }
    return result;
}

console.log(counter('Clarusway', 'a'))

// when only one statement, you can remove curly brackets around that one statement

// prime number function; a prime is only divisible by 1 and itself

function Prime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(Prime(3));