// 2. Напишіть скріпт в зовнішньому файлі, 
// який виводить в консоль ваше прізвище.    
// Підключіть створений файл до HTML-документу.

alert('Tretyak');


// 3. a) оголосіть дві змінні;
//     b) запишіть у змінні будь-які значення;
//     c) виведіть на екран значення змінних;
//     d) скопіюйте значення однієї змінної в іншу;
//     e) виведіть на екран значення змінних.

let season = 'winter';
let sky;

alert(season);
alert(sky);

sky = season;

alert(season);
alert(sky);


// 4. Створіть об’єкт з 5-ма наступними 
// властивостями: “String”, “Number”, “Boolean”, 
// “Undefined”, “Null”. 
// Значення кожної властивості повинно відповідати 
// відповідному примітивному типу даних.

let task = "homework";    //string
alert(`result, ${task}`);

let n = "986374";    //number
alert(n);

let sumDigit = 200 < 3; //boolean
alert(sumDigit);

let greater = 200 >3;
alert(greater);

let x;  //undefined
x;    
alert(x);

alert("x" / 7);    

let country = null;    //null
alert(country);


// 5. Використовуючи функцію confirm() 
// задайте користувачу питання про досягнення 
// ним повнолітнього віку. 
// Результат запишіть в змінну isAdult 
// і виведіть в консоль.

let isAdult = confirm("You adult?");
alert(isAdult);
console.log(isAdult);


// 6. В зовнішньому файлі напишіть скріпт, 
// в якому оголосіть змінні, 
// для збереження таких даних:
// 	- ваше ім’я
// 	- ваше прізвище
// 	- навчальна група
// 	- ваш рік народження.
// Присвойте змінним відповідні значення. 
// Створіть та проініціалізуйте логічну змінну 
// для збереження вашого сімейного стану. 
// Визначте тип кожної змінної.
// Виведіть значення змінних в консоль, 
// відповідно до їх типу, 
// в такому порядку: Number, Boolean, String.
// Створіть 2 довільних змінних 
// типу Null і Undefined відповідно. 
// Виведіть їх тип в консоль.
    
let firstName = prompt("Ваше ім'я?", "");
alert(firstName);
let surName = prompt("Ваше прізвище?", "");
alert(surName);
let youGroup = prompt('З якої Ви групи?', "");
alert(youGroup);
let birthday = prompt('Date');
alert(birthday);

console.log(youGroup);
console.log(birthday);
console.log(firstName , surName);

// 7. За допомогою функції prompt() 
// напишіть скріпт, який послідовно запитує 
// в користувача логін, емейл та пароль, 
// і виводить на екран повідомлення із введеними даними. 
// Наприклад “Dear User, your email is usermale@gmail.com, 
// your password is qwerty”.




// 8. Напишіть скріпт, який вираховує 
// кількість секунд в годині, 
// в добі, в місяці, 
// записує результати в відповідні змінні, 
// і виводить їх значення на екран.

let hours = hours.getSeconds();
alert(hours);
let day = day.getSeconds();
alert(day);
let month = month.getSeconds();
alert(month);
