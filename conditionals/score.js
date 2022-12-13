// let score = +prompt("Enter your score: ")

// let letter = ""

// if (score >= 90) {
//     letter = "A";
// }

// else if (score >= 80) {
//     letter = "B";
// }

// else if (score >= 70) {
//     letter = "C";
// }

// else if (score >= 60) {
//     letter = "D";
// }

// else {
//     letter = "F";
// }

// console.log(`Your score is ${score} and your grade is ${letter}`)

// switch(variable/expression) {
//     case value1:
//         //code to execute
//     break;
    
//     case value2:
//         //code to execute
//     break;

//     case valueN: 
//         //code to execute
//     break;

//     default: 
//         //code to execute
// }

let item = 'paper';

switch(item){
    case 'pen':
        console.log('A pen is $10');
    break;
    case 'paper':
        console.log('A paper is $50000');
    break;
    case 'book':
        console.log('A book is $5');
    default:
        console.log('Item not found');
    break;
}