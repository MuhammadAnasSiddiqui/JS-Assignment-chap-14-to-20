// chap# 14 to 16

// Question#1
var arr = [];
console.log(arr);

// Question#2
var newArr = new Array();
console.log(newArr);

// Question#3
var arr = ["Anas", "Ahmed", "Ali"];
console.log(arr);

// Question#4
var arr = [1, 2, 3];
console.log(arr);

// Question#5
var arr = [true, false];
console.log(arr);

// Question#6
var arr = ["Anas", 1, true];
console.log(arr);

// Question#7
document.write("<h1>Qualification</h1>")
var eduArr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "phD",];

for (var i = 0; i < eduArr.length; i++) {
    document.write(eduArr[i] + "<br>")
}

// Question#8

var stdArr = ["Michael", "John", "Tony"];
var stdMarks = [320, 230, 480];
var totalMarks = 500;

var std1Percentage = stdMarks[0] * 100 / totalMarks;
var std2Percentage = stdMarks[1] * 100 / totalMarks;
var std3Percentage = stdMarks[2] * 100 / totalMarks;

document.write(+ "<br>" + "<br>" + "<br>")

document.write("Score of " + stdArr[0] + " " + "is " + stdMarks[0] + ". Percentage: " + std1Percentage + "<br>")
document.write("Score of " + stdArr[1] + " " + "is " + stdMarks[1] + ". Percentage: " + std2Percentage + "<br>")
document.write("Score of " + stdArr[2] + " " + "is " + stdMarks[2] + ". Percentage: " + std3Percentage + "<br>" + "<br>" + "<br>")

// Question#9

var colorsArr = ["Red", "Black", "Pink"];
document.write(colorsArr + "<br>");

// // part(a)
// var userColorStart = prompt("Add color in the beginning of the array.");
// colorsArr.unshift(userColorStart);
// document.write(colorsArr + "<br>");

// part(b)
// var userColorEnd = prompt("Add color in the end of the array.");
// colorsArr.push(userColorEnd);
// document.write(colorsArr + "<br>");

// part(c)
colorsArr.unshift("Blue", "Green");
document.write(colorsArr + "<br>");

// part(d)
colorsArr.shift();
document.write(colorsArr + "<br>");

// part(e)
colorsArr.pop();
document.write(colorsArr + "<br>" + "<br>" + "<br>");

// part(f)
// var index = prompt("which index do you want in the color")
// var indexColor = prompt("which color do you want in the array");

// colorsArr.splice(index,0,indexColor);
// document.write(colorsArr + "<br>");

// part(g)
// var indexDelete = prompt("which index delete in the color")
// var indexColorDelete = prompt("which color delete in the array");

// colorsArr.splice(indexDelete,indexColorDelete);
// document.write(colorsArr + "<br>" + "<br>" + "<br>");

// question#11
var cities = ["Karachi", "LAHORE", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2, 4);
document.write("Cities list:" + "<br>" + cities + "<br>" + "<br>" + "Selected cities list:" + "<br>" + selectedCities);

// question#12
var arr = ["This ", "is ", "my  ", "cat"];
document.write("<h3>" + "Array:" + "<br>" + arr + "</h3>");
var stringArr = arr.join("");
document.write("<h3>" + "string:" + "<br>" + stringArr + "</h3>");

// question#13

var devises = ["keyboard", "mouse", "printer", "monitor"];

document.write("<h1> Devices: " + "<br/>" + devises + "</h1>");

for (var i = 0; i < devises.length; i++) {
    document.write("<h1> Out:" + "<br/>" + devises[i] + "</h1>");
}
document.write("<br/>" + "<br/>")

// question#14
var devises = ["keyboard", "mouse", "printer", "monitor"];

document.write("<h1> Devices: " + "<br/>" + devises + "</h1>");

for (var i = devises.length - 1; i >= 0; i--) {
    document.write("<h1> Out:" + "<br/>" + devises[i] + "</h1>");
}

// question#15
var mobDevices = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>")
for (var i = 0; i < mobDevices.length; i++) {
    document.write("<option> " + mobDevices[i] + "</option>")
}
document.write("</select>");
document.write("<br>" + "<br>" + "<br>");

// chap# 14 to 16

// question#1
var mulArr = [[]];
console.log(mulArr);

// question#2
var mulArr = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

for (var i = 0; i < mulArr.length; i++) {
    document.write(mulArr[i] + "<br>")
}

document.write("<br>" + "<br>" + "<br>");

// question#3
for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>")
}

document.write("<br>" + "<br>" + "<br>");

// question#4
// var tableNum = +prompt("Enter a number to show its multiplicationntable");
// var tableLenght = +prompt("Enter lenght multiplication table");

// for(var i = 1 ; i <= tableLenght ; i++){
//     document.write(tableNum + " x " + i + " = " + tableNum * i + "<br>" + "<br>" + "<br>")
// }

// question#5

var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>")
}

document.write("<br>");

for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[i], "<br>")
}

document.write("<br>" + "<br>" + "<br>");

// question#6

// (a)
for (var i = 1; i <= 15; i++) {
    document.write(i + "<br>")
}

document.write("<br>" + "<br>" + "<br>");

// (b)
for (var i = 10; i > 0; i--) {
    document.write(i + "<br>")
}

document.write("<br>" + "<br>" + "<br>");

// (c)
for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i + "<br>")
    }
}

document.write("<br>" + "<br>" + "<br>");

// (d)
for (var i = 1; i <= 19; i++) {
    if (i % 2 !== 0) {
        document.write(i + "<br>")
    }
}

document.write("<br>" + "<br>" + "<br>");

// (e)
for (var i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i + "k" + "<br>")
    }
}

document.write("<br>" + "<br>" + "<br>");

// question#7
// var bakers = ["cake", "apple pie", "cookie", "chips", "patties"];
// var user = prompt("Welcome to ABC Bakery .What do you want to order sir/ma'am?");

// var isMatch = false;
// for (var i = 0; i < bakers.length; i++) {
//     if (bakers[i] === user) {
//         isMatch = true;
//         document.write("We are sorry. " + user + " is available at index " + i + " in our bakery" + "<br>")
//         break;
//     }
// }
// if (isMatch === false) {
//     document.write(user + " is not available in our bakery" + "<br>")
// }

// question#8
var largestNum = [24, 53, 78, 91, 12];
var tempNum = 0;

for (var i = 0; i < largestNum.length; i++) {
    if (tempNum < largestNum[i]) {
        tempNum = largestNum[i]
    }
}
document.write("Array items: " + largestNum + "<br>");
document.write("The largest number is " + tempNum + "<br>" + "<br>" + "<br>");

// question#9
var smallestNum = [24, 53, 78, 91, 12];
var tempNum = smallestNum[0];

for (var i = 0; i < smallestNum.length; i++) {
    if (tempNum > smallestNum[i]) {
        tempNum = smallestNum[i]
    }
}
document.write("Array items: " + smallestNum + "<br>");
document.write("The smallest number is " + tempNum + "<br>" + "<br>" + "<br>");

// question#10
for (var i = 1; i <= 20; i++) {
    document.write(5 * i + " ,")
}