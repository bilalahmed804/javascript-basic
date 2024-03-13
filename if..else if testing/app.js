//Q.1                       chaptr 12-13
var character = prompt("Enter your alphabet & number")
if (character >= 'a' && character <= 'z' || character >= 'A' && character <= 'Z') {
   if(character >= 'a' && character <= 'z')
    console.log(character + " is a lowercase letter");
    else if (character >= 'A' && character <= 'Z') {
        console.log(character + " is a uppercase letter");
}
}
else if (character){
    console.log(character + " is a number");
}else{
    console.log("invalid character");
}
//Q.2
var first_1 = +prompt("Enter first integer number")
var second_2 = +prompt("Enter second integer number")
if(first_1 > second_2){
    console.log(first_1 + " is a lager number");
}else if(second_2 > first_1){
    console.log(second_2 + " is a lager number");
}else {
    console.log(" Both integer is equal");
}
//Q.3
var num2 = +prompt("Enter number")
if(num2 >0){
    console.log("The number is positive");
}else if(num2 ==0){
    console.log("The number is Zero");
}else{
    console.log("The number is negative");
}
//Q.4
var vowel = prompt("Enter vowel ( a of string.length 1: )")
if(vowel.length === 1){
if(vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u" ||
vowel == "A" || vowel == "E" || vowel == "I" || vowel == "O" || vowel == "U"){
    console.log("The character " + "'"+ vowel + "'"+ " is a vowel" );
}else{
    console.log("The character " + "'"+ vowel + "'"+ " is not a vowel" );
}
}
else{
    console.log("invalid input plz enter a single character");
}
//Q.5
var correctpassword = "12345";

var userInput = prompt("Enter your password (12345)");

if(!userInput){
    console.log("Please entr your password");
}else if(userInput === correctpassword){
    console.log("Correct the password you entered matches the original password");
}else{
    console.log("Incorrect password");
}

//Q.6
var greeting;
// var hour = 18
var hour = +prompt("Enter time (only hour)");
if(hour <15){
    // greeting= "Good day"
    console.log(greeting= "Good day");
}else{
    // greeting= "Good evening"
    console.log(greeting= "Good evening");
}
//Q.7
var time = prompt("Enter time (limit:1 & 23 hour)");
if(time >0 && time <12){
    console.log("Good Morning");
}else if(time >12 && time <17){
    console.log("Good afternoon");
}else if(time >17 && time <21){
    console.log("Good evening");
}else if(time >21 && time <=23){
    console.log("Good night");
}