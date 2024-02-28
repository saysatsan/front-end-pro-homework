const userNumber = parseFloat(prompt("Введіть кількість годин, які потрібно перевести в секунди"));

let seconds = userNumber * 60 * 60;

function hourName (userNumber){
  switch (userNumber){
    case 1: return "година";
    case 2: 
    case 3: 
    case 4: return "години";
    default: return "годин";
  }
}

alert(`${userNumber} ${hourName (userNumber)} - це ${seconds} секунд`)
