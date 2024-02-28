const array = [1, 2, 3, 4, 5, 6, 7];

// якщо  потрібно видалити елемент зі значенням item
function  removeElement(array, item){
  let index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }else {
    console.log("Даний елемент відсутній в масиві!");
  }

}

removeElement(array, 3);

console.log(array);



// якщо потрібно видалити елемент з індексом item

// function  removeElement2(array, item){
//   if (item >= 0 ) {
//     array.splice(item, 1);
//   } else {
//     console.log("Даний елемент відсутній в масиві!");
//   }

// }

// removeElement2(array, 3);

// console.log(array);


// якщо потрібно видалити елемент з порядковим номером item

// function  removeElement3(array, item){
//     if (item >= 0 ) {
//     array.splice((item - 1), 1);
//   } else {
//     console.log("Даний елемент відсутній в масиві!");
//   }

// }

// removeElement3(array, 3);

// console.log(array);