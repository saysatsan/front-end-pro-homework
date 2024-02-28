let arr = [];
let arrLength = prompt("Вкажіть довжину ");

if (!isNaN(arrLength)) {
  arrLength = parseInt(arrLength); 

  for (let i = 0; i < arrLength; i++) {
      let arrItem = prompt("Введіть елемент масиву " + (i + 1) + ":");
      arr.push(arrItem);       
  }
  document.write("1. Створений масив = " + arr + "</br>")

  arr.sort();
  document.write("2. Створений відсортований масив = " + arr + "</br>")
  if(arrLength >= 4){
    arr.splice(1,3);
    document.write("3. Масив з видаленими елементами з 2 по 4 включно = " + arr + "</br>")
  } else{
    document.write("3. Довжина масиву менше 4 елементів" )
  }
  
} else {
  alert("Будь ласка, введіть коректне числове значення для довжини масиву.");
}

