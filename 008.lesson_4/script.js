// Вивести на сторінку в один рядок через кому числа від 10 до 20.
document.write("<h3>Завдання №1</h3>");

for (let i = 10; i <= 20; i++) {  
  if (i < 20) {
    document.write( i + ", ");
  }
  else {
    document.write(i + "</br>");
  }
}


// Вивести квадрати чисел від 10 до 20.
document.write("<h3>Завдання №2</h3>");

for (let i = 10; i <= 20; i++) {
  if (i < 20) {
    document.write(i * i + ", ");
  } else {
    document.write(i + "</br>");
  }
}


// Вивести таблицю множення на 7.
document.write("<h3>Завдання №3</h3>");
for (let i = 1; i <= 10; i++) {
  if (i <= 10) {
    document.write(`${i} * 7 = ` + i * 7 + "</br>");
  } 
}

// Знайти суму всіх цілих чисел від 1 до 15
document.write("<h3>Завдання №4</h3>");
let y = 0;
for (let i = 1; i <= 15; i++) {  
  y += i;
}

document.write(y); 

//Знайти добуток усіх цілих чисел від 15 до 35
document.write("<h3>Завдання №5</h3>");
let x = 1;
for (let i = 15; i <= 35; i++) {  
  x *= i;
}

document.write(x);

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500

document.write("<h3>Завдання №6</h3>");
let num = 0;
let count = 0;

for (let i = 1; i <= 500; i++) {
  num += i;
  count++;
}

let result = num / count;

document.write(result);

// Вивести суму лише парних чисел в діапазоні від 30 до 80.

document.write("<h3>Завдання №7</h3>");

let arr = [];

for (let i = 30; i <= 80; i++) {
  if (i % 2 == 0) {
    arr.push(i)
  } 
}
let sum = 0;
for (let a of arr) {
  sum += a;  
}

document.write(sum);

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.

document.write("<h3>Завдання №8</h3>");

for (let i = 100; i <= 200; i++) {  
  if (i % 3 == 0) {
    document.write( i + ", ");
  }  
}

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

document.write("<h3>Завдання №9</h3>");

let naturNum = prompt("Введіть натуральне число для Завдання №9:");
number = parseInt(naturNum);
let arrPair = [];
if (isNaN(number) || number <= 0) {
  document.write("Введено некоректне число.");
} else {
  document.write("Дільники числа " + number + ": ");
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      document.write(i +", ");
      if(i % 2 === 0){
        arrPair.push(i);
      }
    } 
  }
}


// Визначити кількість його парних дільників.

document.write("<h3>Завдання №10</h3>");
let arrLength = arrPair.length;

if (isNaN(number) || number <= 0) {
  document.write("Введено некоректне число.");
} else { 
  document.write("Число " + number + " має " + arrLength + " парних дільників");
}

// Знайти суму його парних дільників.
document.write("<h3>Завдання №11</h3>");

let arrSum = 0;
for (let a of arrPair) {
  arrSum += a;  
}

document.write("Сума парних доданків числа  " + number + " = " + arrSum);

// Надрукувати повну таблицю множення від 1 до 10.

document.write("<h3>Завдання №12</h3>");
for(let y = 1; y <= 10; y++){
  for (let i = 1; i <= 10; i++) {
  if (i < 10) {
    document.write(`${y} * ${i} = ` + i * y + "</br>");
  } else if(i = 10){
    document.write(`${y} * ${i} = ` + i * y + "</br>" + "--------------------"+ "</br>");
  }
}}
