num1 = +prompt("Enter first value: ");
num2 = +prompt("Enter second value: ");
num3 = +prompt("Enter third value: ");

function greatest(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return console.log(`${num1} is the greatest value`)
    } else if (num2 > num1 && num2 > num3) {
        return console.log(`${num2} is the greatest value`)
    } else if (num3 > num1 && num3 > num2) {
        return console.log(`${num3} is the greatest value`)
    } else if (num1 === num2) {
        return console.log(`${num1} and ${num2} are tied for the greatest value`)
    } else if (num2 === num3) {
        return console.log(`${num2} and ${num3} are tied for the greatest value`)
    } else if (num1 === num3) {
        return console.log(`${num1} and ${num3} are tied for the greatest value`)
    } else if ((num1 === num2) && (num2 === num3)) {
        return console.log("All three values are equivalent to each other.")
    } else {
        return console.log("Please enter a number for each value.")
    }
}