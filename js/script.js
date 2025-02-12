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

