let input = prompt("ใส่คะแนน:");
let score = Number(input);
let isNotNumber = (input.trim() === '' || input.trim() === null);

if (isNaN(score) || isNotNumber) {
  console.log("กรุณาใส่คะแนนเป็นตัวเลข");
} else if (score >= 80) {
  console.log('A');
} else if (score >= 70) {
  // 70-79
  console.log('B');
} else if (score >= 60) {
  //60-69
  console.log('C');
} else if (score >= 50) {
  //50-59
  console.log('D');
} else {
  //น้อยกว่า 50
  console.log('F');
}