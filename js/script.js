document.write("<h2>Первая строка в отдельном файле</h2>")
document.write("Hello world")

document.write("<h2>First program</h2>");

// document.write("1) " + "2 + 5 = ");
// sum = 2 + 5;
// document.write(sum);


document.write("<p>HGHGH</p>");


// Отправка на консоль

/*
sum = 5 + 8;
console.log("Результат операции: ");
console.log(sum);
*/


// Созание и вывод переменных
var userName1 = "Tom";
var userAge1 = 16;
var isMarried = false;
document.writeln("<h3>Моё имя " + userName1 + ", мне " + userAge1 + " лет</h3>");
var text = (`name - ${userName1} 
           \nage - ${userAge1}
           \nstatus - ${isMarried}`);

console.log(text)

document.writeln("<br> тип userName1: " + typeof userName1);
document.writeln("<br> тип userAge1: " + typeof userAge1);


// Операторы ? и ??
document.write("<h3>Операторы ? и ??</h3>")
document.write("<p></p>")

var a = 1;
var b = 2;
var result = a < b ? a : b;
document.writeln(`Первое равенство ${result} <br>`);

result = a + 9 < b + 2 ? a : b;
document.writeln(`Второе равенство ${result} <br>`)

document.write(``)

document.write("<p></p>")



// parseInt()
document.write("<h3>parseInt()</h3>")
document.write("<p></p>")

var num1 = "1234ddd";
var num2 = parseInt(num1);
document.write(`parseInt(num1) = ${num2}`);

num1 = "1q2w3e4r";
num2 = parseInt(num1);
document.write




document.write("<p></p>")