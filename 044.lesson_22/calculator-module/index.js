import add from "./components/add.js"; 
import div from "./components/div.js"; 
import mult from "./components/mult.js";
import sub from "./components/sub.js";
import { a, b } from "./components/constants.js";

console.log(`Addition: ${add(a, b)}`);
console.log(`Subtraction: ${sub(a, b)}`);
console.log(`Multiplication: ${mult(a, b)}`);
console.log(`Division: ${div(a, b)}`);