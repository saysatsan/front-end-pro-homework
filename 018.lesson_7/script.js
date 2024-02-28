function pow(num, degree){ 
   if (degree == 0){
    return 1;
   } else if (degree < 0){
    return 1 / (num * pow(num, -degree));
   } else {
    return num * pow(num, degree - 1);
   }
}

let result = pow(2, 3);

console.log(result);