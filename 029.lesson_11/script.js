
function Student(name, secondName, year, evaluations){
    this.name = name,
    this.secondName = secondName,
    this.year = year,
    this.evaluations = evaluations;
    this.visiting = new Array();     
}

Student.prototype.age = function(){
    const today = new Date().getFullYear();
    this.age = today - this.year;
    console.log(`Вік ${this.name} = ${this.age} років`);
}

Student.prototype.gpa = function(){
    if (this.evaluations.length === 0) {
        console.log(`Середній бал ${this.name} = 0`);
    }
    const sum = this.evaluations.reduce((sum, evaluation) => sum + evaluation, 0);
    this.gpa = sum / this.evaluations.length;
    console.log(`Середній бал ${this.name} = ${this.gpa}`);
}

Student.prototype.present = function(){
    if (this.visiting.length < 25) {
        this.visiting.push(true);
      } else {
        console.log('Maximum visitations reached (25).');
      }
}

Student.prototype.absent = function(){
    if (this.visiting.length < 25) {
        this.visiting.push(false);
      } else {
        console.log('Maximum visitations reached (25).');
      }
}

Student.prototype.summary = function(){
    const visits = this.visiting.filter(Boolean).length / this.visiting.length;
    
    if (this.gpa > 90 && visits > 0.9) {
        return 'Молодець!';
      } else if (this.gpa >= 90 || visits >= 0.9) {
        return 'Добре, але можна краще';
      } else {
        return 'Редиска!';
    }
}

const student1 = new Student('Polia', 'First', 1993, [100, 92, 95]);
const student2 = new Student('Petra', 'Second', 1992, [99, 87, 95, 92]);
const student3 = new Student('Katia', 'Johnson', 2002, [80, 75]);


student1.age();
student1.gpa();

student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
console.log(student1.visiting);

console.log(student1.summary());

student2.age();
student2.gpa();
student2.present();
student2.present();
student2.absent();
console.log(student2.visiting);
console.log(student2.summary());

student3.age();
student3.gpa();
// student3.present();
student3.present();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
console.log(student3.visiting);
console.log(student3.summary());

