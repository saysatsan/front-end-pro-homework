class Human {

    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
   
    addResident(human) {
		this.residents = [];
        this.residents.push(human);
    }
}

class House {

    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {

        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment);
        } else {
            console.log('Будинок заповнений!');
        }
    }
}


const person1 = new Human('Вася', 'чоловік');
const person2 = new Human('Марічка', 'жінка');
const person3 = new Human('Оленка', 'жінка');

console.log(person1); 
console.log(person2); 
console.log(person3); 



const apartment1 = new Apartment();
const apartment2 = new Apartment();

console.log(apartment1); 
console.log(apartment2); 



apartment1.addResident(person1);
apartment1.addResident(person2);
apartment2.addResident(person3);

console.log(apartment1); 
console.log(apartment2);


const house = new House(3);


console.log(house.addApartment(apartment1));
console.log(house.addApartment(apartment2));
console.log(house.addApartment(apartment2)); 

console.log(house.addApartment(apartment2));