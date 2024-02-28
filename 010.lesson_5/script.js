
let number1 = parseFloat(prompt("Введіть перше число"));
let number2 = parseFloat(prompt("Введіть друге число"));
let number3 = parseFloat(prompt("Введіть третє число"));

if(isNaN(number1) || isNaN(number2) || isNaN(number3)){
  alert("Введено не вірні дані!");
} else {
  let result = (number1 + number2 + number3) / 3;
  alert(`Середнє арифметичне введених чисел ${result}`);
}

