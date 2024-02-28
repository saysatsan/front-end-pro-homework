function sum(x){
    let y = x;
    
    return function (j){        
        y += j;
        return y;
    }
}

 let result = sum(0);

// sum(20);
console.log(result(3));
console.log(result(5));
console.log(result(20));