
let arr =  [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

//1 Знайти суму та кількість позитивних елементів.

document.write("<h3>Завдання №1</h3>");

let arrPlus = arr.filter(arrayPositiv);

function arrayPositiv(number) {
  return number > 0;
}
let arrLength = arrPlus.length;
let sum = 0;
for (let i of arrPlus) {
  sum += i;  
}

document.write("Кількість позитивних елементів: " + arrLength + "</br>" + "Сума позитивних елементів: " + sum);


//2 Знайти мінімальний елемент масиву та його порядковий номер.

document.write("<h3>Завдання №2</h3>");

let minItem = arr[0]; 
let minIndex = 0; 

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minItem) {
        minItem = arr[i]; 
        minIndex = i; 
    }
}

document.write("Мінімальний елемент масиву: " + minItem + "</br>" 
+ "Індекс елемента: " + minIndex +"</br>"
+ "Порядковий номер елемента: " + (minIndex + 1) +"</br>");



//3 Знайти максимальний елемент масиву та його порядковий номер.

document.write("<h3>Завдання №3</h3>");

let maxItem = arr[0]; 
let maxIndex = 0; 

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxItem) {
        maxItem = arr[i]; 
        maxIndex = i; 
    }
}

document.write("Максимальний елемент масиву: " + maxItem + "</br>" 
+ "Індекс елемента: " + maxIndex +"</br>"
+ "Порядковий номер елемента: " + (maxIndex + 1) +"</br>");


//4 Визначити кількість негативних елементів.

document.write("<h3>Завдання №4</h3>");

let arrNeg = arr.filter(arrayNegative);

function arrayNegative(number) {
  return number < 0;
}

let arrNegLength = arrNeg.length;

document.write("Кількість негативних елементів: " + arrNegLength + "</br>");

//5 Знайти кількість непарних позитивних елементів.

document.write("<h3>Завдання №5</h3>");

let arrOddPlus = [];

for (let i of arrPlus) {  
  if (i % 2 !== 0) {
    arrOddPlus.push(i);
  }  
}


document.write("Кількість непарних позитивних елементів: " + arrOddPlus.length + "</br>");

//6 Знайти кількість парних позитивних елементів.

document.write("<h3>Завдання №6</h3>");

let arrTwinPlus = [];

for (let i of arrPlus) {  
  if (i % 2 == 0) {
    arrTwinPlus.push(i);
  }  
}

document.write("Кількість парних позитивних елементів: " + arrTwinPlus.length + "</br>");

//7 Знайти суму парних позитивних елементів.

document.write("<h3>Завдання №7</h3>");

let sumArrTwinPlus = 0;
for (let i of arrTwinPlus) {
  sumArrTwinPlus += i;  
}

document.write("Cума парних позитивних елементів: " + sumArrTwinPlus + "</br>");

//8 Знайти суму непарних позитивних елементів.

document.write("<h3>Завдання №8</h3>");

let sumArrOddPlus = 0;

for (let i of arrOddPlus) {
  sumArrOddPlus += i;  
}

document.write("Cума непарних позитивних елементів: " + sumArrOddPlus + "</br>");

//9 Знайти добуток позитивних елементів.

document.write("<h3>Завдання №9</h3>");

let mult = 1;

for (let i of arrPlus) {
  mult *= i;  
}

document.write("Добуток позитивних елементів: " + mult + "</br>");


//10 Знайти найбільший серед елементів масиву, ост альні обнулити.

document.write("<h3>Завдання №10</h3>");
for(let i = 0; i < arr.length; i++){
  if (arr[i] !== maxItem){
    arr[i] = 0;
  }
}

document.write("Масив з обнуленими елементами, крім масимального має наступний вигляд: " + arr + "</br>");

