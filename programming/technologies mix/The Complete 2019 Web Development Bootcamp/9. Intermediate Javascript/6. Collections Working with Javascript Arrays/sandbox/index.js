/*
var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
// console.log(guestList);
// console.log(guestList.length);
console.log(guestList[0]);
*/

/*
var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
var guestName = prompt("What is your name?");
// guestList.includes(guestName);
console.log(guestList.includes(guestName));
*/

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
var guestName = prompt("What is your name?");
if (guestList.includes(guestName)) {
    alert("Welcome!");
} else {
    alert("Sorry, maybe next time.");
}
