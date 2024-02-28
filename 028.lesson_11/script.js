const person = {
    name: 'Polia',
    age: 25,
    showInfo: function () {
      console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
    }
};

const person2 = {
    name: 'Petra',
    age: 16,    
};

const car = {
    Brand: 'Toyota',
    Model: 'Camry',
    Year : 2020,
    numberCar: 'АA0000ВВ',
    owner: person,
    showInfo() {
      console.log(`Марка: ${this.Brand}, Модель: ${this.Model}, Рік виписки: ${this.Year}, Номерний знак: ${this.numberCar}`);
      console.log('Інформація про власника:');
      if(this.owner.age > 18){
        this.owner.showInfo()
    } else{
        console.log(`${this.owner.name} молодше 18 років`);
    }}
  };

const car2 = {
    Brand: 'Reno',
    Model: 'Sandero',
    Year : 2019,
    numberCar: 'АA9999ВВ',
    owner: person2,    
};


person.showInfo();
person.showInfo.call(person2);

car.showInfo();
car.showInfo.call(car2);

////////////////////////////////
function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.showInfo = function(){
    console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
}




function Car(brand, model, year, numberCar, owner){
    this.brand = brand,
    this.model = model,
    this.year = year,
    this.numberCar = numberCar;
    this.owner = owner;    
}

Car.prototype.showInfo = function(){
    console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік виписки: ${this.year}, Номерний знак: ${this.numberCar}`);
    console.log('Інформація про власника:');
    if(this.owner.age >= 18){
        this.owner.showInfo();
    } else{
        console.log(`${this.owner.name} молодше 18 років`);
    }    
}


const person1  = new Person('Polia', 25);
const person4 = new Person('Petra', 16);
const person3 = new Person("Katia", 18);


const car1 = new Car('Toyota', 'Camry', 2020, 'АA0000ВВ', person1);
const car3 = new Car('Reno', 'Sandero', 2019, 'АA9999ВВ', person3);
const car4 = new Car('Reno', 'Sandero', 2019, 'АA9999ВВ', person4);

person1.showInfo();
person3.showInfo();
person4.showInfo();

car1.showInfo();
car3.showInfo();
car4.showInfo();
