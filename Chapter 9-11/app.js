//  Chapter 9-11

// Q1
var city = prompt("Enter your city")

if (city == "karachi"){
console.log("Welcome to city of lights")
} else {
    console.log("Welcome to city")
}

// Q2
var name1 = prompt("Enter your name")
var gender = prompt("Genger ?")
if (gender == "male" || gender == "Male"){
    alert("Good Morning Sir " + name1)
}else if(gender == "female" || gender == "Female"){
    alert("Good Morning Ma'am " + name1)
}
else{
    alert("Invalid input. Please enter either 'male' or 'female'.")
}

// Q3
var signal = prompt("Traffic Signal")
if (signal == "must stop" || signal == "Must stop"){
    alert("Red")
}else if (signal == "ready to move" || signal == "Ready to move"){
    alert("Yellow")
}else if ( signal == "move now" || signal == "Move Now"){
    alert("Green")
}else{
    alert("invalid")
}
//Q4
var remaningFuel = prompt("Enter the remaning fuel in liters")

if (remaningFuel < 0.25){
    alert("Please refill the fuel in car")
}else{
    alert("You have enough fuel.")
}

//Q5
//a
var a = prompt("Enter your 6 number");
if (++a === 7){
alert(true);
}else(
    alert(false)
)
//b.
var b = prompt("Enter your 82 value");
if(b++ === 83){
    alert(true)
}else(
    console.log(false)
)

//c.
var c = prompt("Enter the 10 to 13 number");
if (c++ === 13){
alert("condition A is true");
}
if (c === 13){
alert("condition B is true");
}
if (++c < 14){
alert("condition C is true");
}
if(c === 14){
alert("condition D is true");
}else(
    alert("invalid number")
)
//D.
var materialCost = parseInt(prompt("Tell the Material cost"));
var laborCost = parseInt(prompt("Tell the labor cost"));
var totalCost = materialCost + laborCost;
if (totalCost == laborCost + materialCost){
console.log(totalCost);
}else(
    alert("You can only enter numbers")
)


//e.
if (true){
alert("True");
}
if (false){
alert("False");
}

//f
if("15" < "5"){
alert("15 is smaller than 5");
}

//Q6
var computer = parseInt(prompt("Enter marks obtained in Computer Sub 1:"));
var chemistry = parseInt(prompt("Enter marks obtained in Chemistry Sub 3:"));
var totalMarks = parseInt(prompt("Enter total marks:"));

var obtainedMarks = computer + chemistry;
var percentage = (obtainedMarks / totalMarks) * 100;

var grade;
var remarks;
if (percentage >= 80) {
    grade = "A-one" , remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A" , remarks = " very Good";
} else if (percentage >= 60) {
    grade = "B", remarks = "Good";
} else if (percentage >= 50) {
    grade = "C", remarks = "You need to improve";
} else if (percentage >= 40) {
    grade = "D" , remarks = "You need to improve";
} else {
    grade = "Fail" , remarks = "Sorry";
}

console.log("Total Marks; " + totalMarks);
console.log("Marks Obtained; " + obtainedMarks);
console.log("Percentage; " + percentage + "%");
console.log("Grade; " + grade);
console.log("Remarks;" + remarks);

//Q7
var secretNumber = 7;
var guess = parseInt(prompt("Guess the secret number (ringing from 1 to 10) "));
if (guess === secretNumber){
    console.log("Bingo! Correct answer");
}else if( guess === secretNumber +1 || guess === secretNumber -1){
    console.log("Close enough to correct answer");
}

//Q8
var number_$ = parseInt(prompt("Enter a number"));
if(number_$ % 3 === 0){
    alert(number_$ + " is divisible by 3")
}else{
    alert(number_$ + " is not divisible by 3")
}

//Q9
var number_2 = parseInt(prompt("Enter a number"));
if(number_2 % 2 === 0){
    alert(number_2 + " is an even number")
}else{
    alert(number_2 + " is an odd number")
}

//Q.10
var temp = parseInt(prompt("Enter the Tamperature"));
if(temp > 40){
    alert("It is to hot outside")
}else if (temp > 30){
    alert("The weather today is a noraml")
}else if(temp > 20){
    alert("today weather is cool")
}else if(temp > 10){
    alert("Today weather is SO cool")
}else{
    alert("The temperature is below 10 degree Celsius.")
}

//Q.11
var firstNumber = parseInt(prompt('Enter the first number'));
var secondNumber = parseInt(prompt("Enter the second number"));
var operation = prompt("Enter the operatin perfom (+,-,*,/,%);");

var result;
if (operation === "+"){
    result = firstNumber + secondNumber;
}else if (operation === "-"){
    result = firstNumber - secondNumber;
}else if (operation === "*"){
    result = firstNumber * secondNumber;
}else if (operation === "/"){
    result = firstNumber / secondNumber;
}else if (operation === "%"){
    result = firstNumber % secondNumber;
}console.log("Result:" + result);
 