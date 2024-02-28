// Дано масив з елементами різних типів. 
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
document.write("<h3>Завдання №1</h3>");

let array = [1, 2, "hello", "!"];

function sumNumber(array){
   let sum = 0;
   let count = 0;
   for(let i of array){
    if(!isNaN(i)){
        sum += i;
        count++;
    }
   }
   let result = sum / count;
   return document.write(result);
}

sumNumber(array);

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
document.write("<h3>Завдання №2</h3>");

let znak = prompt("Введіть дію для виконання операції над числами");
let x = parseFloat(prompt("Введіть перше число:"));
let y = parseFloat(prompt("Введіть друге число:"));

function doMath(x, znak, y){
    let result = 0;

    switch (znak) {
        case '+': result = x + y; break;
        case '-': result = x - y; break;
        case '*': result = x * y; break;
        case '/': 
            if (y !== 0) {
             result = x / y;
            } else {
                return "Ділення на 0 неможливе.";
            } break;
        case '%': result = x / 100 * y; break;
        case '^': result = Math.pow(x, y); break;
        default: alert("Вибачте, дія не може бути виконана, ви ввели не вірні дані!"); break;
    
    }
    
    return result;
}

document.write(`${x} ${znak} ${y} = ${doMath(x, znak, y)}`);



// Написати функцію заповнення даними користувача двомірного масиву. 
// Довжину основного масиву і внутрішніх масивів задає користувач. 
// Значення всіх елементів всіх масивів задає користувач.
document.write("<h3>Завдання №3</h3>");

let a = prompt("Для створення двовимірного масиву розміру  а*b. Введіть a");
let b = prompt("Для створення двовимірного масиву розміру  а*b. Введіть b");

let arrayBig = [];


function arrayFilling(arrayBig, a, b){
    if( isNaN(a) || isNaN(b)){
        alert("Значення для розмірів масиву не числові!")
    }
    else{
    arrayBig.length = a;
        for (let i = 0; i < a; i++){      
        arrayBig[i] = [];
        arrayBig[i].length = b;
        }

        for (let i = 0; i < arrayBig.length; i++){
            for (let j = 0; j < arrayBig[i].length; j++){
                arrayBig[i][j] = prompt("Введіть елемент для заповнення масиву");
            }    
        }
    }
    return arrayBig;
}

console.log(arrayFilling(arrayBig, a, b));

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
// Вихідний рядок та символи для видалення задає користувач.
document.write("<h3>Завдання №4</h3>");

let string = prompt('Введіть рядок');
let stringElementDelete = prompt('Введіть символи для видалення');
function foo(string, stringElementDelete){   
    let arrayElement = stringElementDelete.split('');
    
    for(let element of arrayElement){
        let elementInRegexp = new RegExp(element, 'g');
        console.log(elementInRegexp);
        string = string.replace(elementInRegexp, '');
        console.log(string);

    }
    
    return string;
}
document.write(foo(string, stringElementDelete))