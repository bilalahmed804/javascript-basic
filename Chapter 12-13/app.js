// //Q1
// var input = prompt("Enter a character");
// if ((input >= 'a' && input <= 'z') || (input >= 'A' && input <= 'Z')) {
//     if (input >= 'a' && input <= 'z') {
//         console.log(input + " is a lowercase letter");
//     } else if (input >= 'A' && input <= 'Z') {
//         console.log(input + " is a uppercase letter");
//     }
// } else if (input) {
//     console.log(input + " is a number");
// } else {
//     console.log("Invalid input");
// }
// //Q2
// var number_1 = prompt("Enter first integer:");
// var number_2 = prompt("Enter second integer:");
// if (number_1 > number_2) {
//     console.log(number_1 + " is larger");
// } else if (number_2 > number_1) {
//     console.log(number_2 + " is larger");
// } else {
//     console.log("Both integers are equal");
// }

// //Q3
// var number = parseInt(prompt("Enter a number:"));
// if (number > 0) {
//     console.log("The number is Positive");
// } else if (number < 0) {
//     console.log("The number is Negative");
// } else {
//     console.log("Zero");
// }

//Q4
var character = prompt("Enter a vowels character:");
var vowels = ['a', 'e', 'i', 'o', 'u'];
if (vowels.includes(character.toLowerCase())) {
    console.log("True, it's a vowel");
}else {
    console.log("False, it's not a vowel");
}