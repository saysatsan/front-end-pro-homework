const yearOfBirth = prompt("Введіть ваш рік народження");
const city = prompt("В якому місті ви живете?");
const sport = prompt("Який улюблений ваш вид спорту?");


const today = new Date();
let year = today.getFullYear();
const age = year - yearOfBirth;

function getCountry(city) {
    switch (city) {
      case "Київ": return "України";
      case "Вашингтон": return "США";
      case "Лондон": return "Великої Британії";
      default: return city;      
    }
}

function getSport(sport) {
    switch (sport) {
      case "футбол": return "Пеле";
      case "бокс": return "Олександр Усик";
      case "художня гімнастика": return "Різатдінова Ганна";
      default: return sport;      
    }
}

function message(city, sport){
    let msg = "";
    if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {
        msg = `Ти живеш у столиці ${getCountry(city)}.
        `;
      } else {
        msg = `Ти живеш у місті ${city}.
        `;
      }

    if (sport == "футбол" || sport == "бокс" || sport == "художня гімнастика") {
        msg = msg + `Твій улюблений вид спорту ${sport}. Круто! Хочеш стати як ${getSport(sport)}?`;
      }  else {
        msg =  msg + `Твій улюблений вид спорту ${sport}.`;
      }

    return msg;
}


if (yearOfBirth === null) {
        alert ('Шкода, що Ви не захотіли ввести свій рік народження');
} else 
    if (city === null){
        alert ('Шкода, що Ви не захотіли ввести своє місто');
    } else 
        if (sport === null){
                alert ('Шкода, що Ви не захотіли ввести свій улюблений вид спорту');               
               
    } else {
        alert(`Трошки про тебе:
        Тобі ${age} років.
        ${message(city, sport)}`)

}




