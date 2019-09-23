/*
var output = [];
output.push(1);
output
output.push(2);
output
output.push(3);
*/

/*
var output = [];
var count = 1;

function fizzBuzz() {
    // Write code here.
    output.push(count);
    console.log(output);
}

fizzBuzz(); // run in console
*/

/*
var output = [];
var count = 1;

function fizzBuzz() {
    // Write code here.
    output.push(count);
    count++;
    console.log(output);
}

fizzBuzz(); // run in console 
*/

// 12%2; // 0
// 12%5; // 2 

/*
var output = [];
var count = 1;

function fizzBuzz() {
    // Write code here.

    if (count % 3 === 0) {
        output.push("Fizz");
    } else {
        output.push(count);
    }

    count++;
    console.log(output);
}

fizzBuzz(); // run in console 
*/

/*
var output = [];
var count = 1;

function fizzBuzz() {
    // Write code here.

    if (count % 3 === 0) {
        output.push("Fizz");
    }
    else if (count % 5 === 0) {
        output.push("Buzz");
    }
    else {
        output.push(count);
    }

    count++;
    console.log(output);
}

fizzBuzz(); // run in console 
*/

var output = [];
var count = 1;

function fizzBuzz() {
    // Write code here.

    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    }
    else if (count % 3 === 0) {
        output.push("Fizz");
    }
    else if (count % 5 === 0) {
        output.push("Buzz");
    }
    else {
        output.push(count);
    }

    count++;
    console.log(output);
}

fizzBuzz(); // run in console 