
//Q1
var new91 = ["Bilal"]
console.log(new91)
//Q2
var new01 = []
console.log(new01)
//Q3
var new1 = [typeof "Bilal"]
console.log(new1)
//Q4
var new2 = [typeof 578457]
console.log(new2)
//Q5 
var new3 = [typeof true]
console.log(new3)
//Q6
var new4 = [typeof "Bilal", typeof 578457, typeof true]

//Q7
var newName = ["1) SSC" , "2) HSC", "3) BSC", "4) BS", "5) BCOM", "6) MS", "7) M.PhiL","8) PhD"]
console.log(newName)

//Q9  //Q10
var cities = [typeof"karachi","<br />", "<strong>lahore</strong>", "islamabad", "bhawaplur", "Los Angeles", "Seattle","Quetto"];

cities.push(typeof"lion","animals",true ,9485)

cities.pop("Quetto")

cities.unshift(typeof 87)

cities.shift("cate")

cities.splice(2,3,"goat","horse")
cities.splice(4,1);
console.log(cities)
//Q11   
var new1 = ["mouse", "monitor"];
new1.push("<br />" + "keyboard")
document.write(new1)
//Q12
var newpets = cities.slice(1,5)
document.write(newpets)

// loops
//Q13
for(var i = 10; i >=0 ; i--){
    document.write(i + "<br>")
}

for(var i = 40; i >=0 ; i=i-4){
    document.write(i + "<br>")
}