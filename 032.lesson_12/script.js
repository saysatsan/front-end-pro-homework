class SuperMath {

    check(obj) {
        
        const answer = confirm(`Ви впевнені, що хочете виконати цю дію ${obj.X} ${obj.znak} ${obj.Y}?`);

        if (answer) {
            return this.calculate(obj);

        } else { 
          const newInput = this.input();

          return this.calculate(newInput);
        }
    } 
    
    input() {
        const x = +prompt('Введіть значення x:');
        const y = +prompt('Введіть значення y:');
        const znak = prompt('Введіть бажану операцію операцію (+, -, /, *, %):');

        return { X: x, Y: y, znak };
    }

    calculate(obj) {

        switch (obj.znak) {
          case '+':
            return console.log(obj.X + obj.Y);
          case '-':
            return console.log(obj.X - obj.Y);
          case '*':
            return console.log(obj.X * obj.Y);
          case '/':
            return console.log(obj.Y !== 0 ? obj.X / obj.Y : 'Ділення на нуль неможливе');
          case '%':
            return console.log(obj.Y !== 0 ? obj.X % obj.Y : 'Ділення на нуль неможливе');
          default:
            return console.log('Упс, щось пішло не так! Скоріш за все ви ввели не коректну дію');
        }
    }
}


const obj = {X:12, Y:3, znak: "/"};

p = new SuperMath();
p.check(obj);