//Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

document.write("<h3>Завдання №1</h3>");

for (let i = 20; i <= 30; i += 0.5) {  
  if (i < 30) {
    document.write( i + ", ");    
  }
  else {
    document.write(i + "</br>");
  }
}

// Один долар коштує 27 гривень. 
// Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
document.write("<h3>Завдання №2</h3>");
const oneDollar = 27;
for (let i = 10; i <= 100; i+=10) {
  if (i < 100) {
    document.write(i * oneDollar + ", ");
  } else {
    document.write(i * oneDollar + "</br>");
  }
}


// Дане ціле число. Вивести всі цілі числа від 1 до 100,
//  квадрат яких не перевищує числа N.
document.write("<h3>Завдання №3</h3>");

let N = 999;

for (let i = 1; i <= 100; i++) {
  let y = i * i;  
 if (y <= N){
  document.write(i + ", "); 
} 
}


// Дане ціле число. З'ясувати, чи є воно простим 
// (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
document.write("<h3>Завдання №4</h3>");

let n = 5;

let arrDiv = [];
if (isNaN(n) || n <= 1) {
  document.write("Введено некоректне число.");
} else {  
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {  
      arrDiv.push(i);
    } 
  }  
}

if (arrDiv.length > 2){
  document.write(`Число ${n} не є простим`);
 
} else if (arrDiv.length === 2){
  document.write(`Число ${n} є простим`);
}




// Дане деяке число. Визначити, чи можна одержати це число 
// шляхом зведення числа 3 у деякий ступінь. 
// (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

document.write("<h3>Завдання №5</h3>");
let x = 9;
function degreeThree(x) {
  if (x <= 0) {
    return false;
  }

  while (x > 1) {
    if (x % 3 !== 0) {
      return false; 
    }
    x /= 3; 
  }

  return true;
}

let result = degreeThree(x);
if(result === true){
  document.write(`Число  ${x}  може бути отримане зведенням числа 3 у деякий ступінь`);
} else{
  document.write(`Число ${x} не може бути отримане зведенням числа 3 у деякий ступінь`);
}

