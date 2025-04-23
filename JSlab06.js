let input1 = prompt("ใส่ตัวเลขแรก:");
let input2 = prompt("ใส่ตัวเลขตัวที่สอง:");
let number1 = Number(input1);
let number2 = Number(input2);

let isNotNumber1 = (input1.trim() === '' || input1.trim() === null);
let isNotNumber2 = (input2.trim() === '' || input2.trim() === null);

if (isNaN(number1) || 
isNaN(number2) ||
isNotNumber1 || 
isNotNumber2 ) 