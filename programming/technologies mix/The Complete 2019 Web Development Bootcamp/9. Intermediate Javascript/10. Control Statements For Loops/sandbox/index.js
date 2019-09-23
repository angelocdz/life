/*
      start end change
        |    |    |
 for ( i=0; i<2; i++) {
     // do something
 }
*/

/*
var i = 1;
while (i < 2) {
    console.log(i);
    i++;
}
*/

/*
for (var i = 1; i < 2; i++) {       // i=1 true  i=2 false
    console.log(i);
}                                   // i=2 
*/

/*
var output = [];
var count = 1;
function fizzBuzz() {
    while (count <= 100) {
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
    }
    console.log(output);
}
fizzBuzz();
*/

var output = [];

function fizzBuzz() {

    for (var count = 1; count < 101; count++) {
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
    }
    console.log(output);
}

fizzBuzz();

/*
while (something is true) {         // state
    // do something
}

for (i=0; i<2; i++) {               // iterate
    // do something
}
*/