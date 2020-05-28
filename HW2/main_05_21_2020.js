// task 1**************

let x = 1;
let y = 2;

let res1 = x + '' + y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // "12"
console.log(typeof res1); // "string"


let res2 = true + '' + y;  // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"


let res3 = !! (x + y); // Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"


let res4 = parseFloat(Boolean(x));  // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"


// task 2**************

let a = prompt('input digital');
if (a % 7) { 
    console.log('fals');
}
else {
    console.log('true');
}

if (a % 2) {
    console.log('fals');
}
else {
    console.log('true');
}

// task 4***************

let cities = ["Rome", "Lviv", "Warsaw"];
console.log(cities);

let myArr = [cities.join('*')]; 
console.log(myArr);


// task 5**************

let isAdult = prompt('Are You already 18 years old?', 18);
if (isAdult >= 18) {
    alert('You have reached the age of majority');
}
else {
    alert('You are still too young');
}

// task 6************

let a = prompt("input a length firs side");
let b = prompt("input a length second side");
let c = prompt("input a length third side");

if (a > 0 && b > 0 && c > 0){
    let halfPerimetrTriangle = p = (a + b + c)/2;
    let areaTriangle = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    console.log(areaTriangle);
}
else {
    alert("Incoerrect data!");
}
