let number1 = parseFloat(prompt("Введіть перше число:"));
let number2 = parseFloat(prompt("Введіть друге число:"));

let sum = + number1 + number2 ;
let dif = number1 - number2 ;
let multiplication = number1 * number2 ;
let division = number1 / number2 ;

alert(`Користувач ввів ${number1} і ${number2}:

${number1} + ${number2}= ${sum}
${number1} - ${number2}= ${dif}
${number1} * ${number2}= ${multiplication}
${number1} / ${number2}= ${division}`)