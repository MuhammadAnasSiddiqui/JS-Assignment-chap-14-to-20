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

document.write( + "<br>" + "<br>" + "<br>")

document.write("Score of " + stdArr[0] + " " + "is " + stdMarks[0] + ". Percentage: " + std1Percentage + "<br>")
document.write("Score of " + stdArr[1] + " " + "is " + stdMarks[1] + ". Percentage: " + std2Percentage + "<br>")
document.write("Score of " + stdArr[2] + " " + "is " + stdMarks[2] + ". Percentage: " + std3Percentage + "<br>" + "<br>" + "<br>")

// Question#9

var colorsArr = ["Red", "Black" ,"Pink"];
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
var cities = ["Karachi","LAHORE","Islamabad","Quetta", "Peshawar"];
var selectedCities = cities.slice(2,4);
document.write("Cities list:" + "<br>" + cities + "<br>"  + "<br>" + "Selected cities list:" + "<br>" + selectedCities);

// question#12
var arr = ["This " , "is " , "my  " , "cat"];
document.write("<h3>" + "Array:" + "<br>" + arr + "</h3>");
var stringArr = arr.join("");
document.write("<h3>" + "string:" + "<br>" + stringArr + "</h3>");

// question#13

var pcDevices = [];
pcDevices.push("keyboard");
pcDevices.push("mouse");
pcDevices.push("printer");
pcDevices.push("monitor");

document.write("<h1> Devices:" + "<br/>" + pcDevices + "</h1>");

document.write("<h1> Out:" + "<br/>" + pcDevices.shift() + "</h1>");
document.write("<h1> Out:" + "<br/>" + pcDevices.shift() + "</h1>");
document.write("<h1> Out:" + "<br/>" + pcDevices.shift() + "</h1>");
document.write("<h1> Out:" + "<br/>" + pcDevices.shift() + "</h1>");

// question#14

var pcDevices = [];

pcDevices.push("keyboard");
pcDevices.push("mouse");
pcDevices.push("printer");
pcDevices.push("monitor");

document.write("<h1> Devices:" + "<br/>" + pcDevices + "</h1>");

document.write("<h1> Out:" + "<br/>" + pcDevices.pop() + "</h1>");
document.write("<h1> Out:" + "<br/>" + pcDevices.pop() + "</h1>");
document.write("<h1> Out:" + "<br/>" + pcDevices.pop() + "</h1>");
document.write("<h1> Out:" + "<br/>" + pcDevices.pop() + "</h1>");

// question#15
var mobDevices = ["Apple", "Samsung", "Motorola", "Nokia","Sony","Haier"];
document.write("<select>")
for(var i = 0 ; i < mobDevices.length; i++){
document.write("<option> " + mobDevices[i] + "</option>")
}
document.write("</select>")