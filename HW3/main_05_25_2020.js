// function multipli(a, b, c, d) {
//     let result = a * b * c * d;
//     console.log(result);
// }

// multipli(2, 3, 4, 5);

let arr = [2, 3, 4, 5];
let multipli = 1 
for(let i = 0; i < arr.length; i++) { 
    multipli *= arr[i];
    
}

console.log(multipli);
