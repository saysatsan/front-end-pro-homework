const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey (length, characters){

  let result = [];
  for(let i = 0; i < length; i++){
    let randomNumber = Math.floor(Math.random() * characters.length);
 
    result.push(characters.slice(randomNumber, (randomNumber + 1)));
  }

  return result.join("");
 
}

const key = generateKey(16, characters);
console.log(key); 
