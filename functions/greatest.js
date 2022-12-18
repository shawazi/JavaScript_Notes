num1 = prompt("Enter first value: ");
num2 = prompt("Enter second value: ");
num3 = prompt("Enter third value: ");

function greatest(num1, num2, num3) {
    if (isNaN(num1 || num2 || num3) === true) {
        return console.log("Please enter a number for each value.")
    } else if (num1 > num2 && num1 > num3) {
        return console.log(`${num1} is the greatest value`)
    } else if (num2 > num1 && num2 > num3) {
        return console.log(`${num2} is the greatest value`)
    } else if (num3 > num1 && num3 > num2) {
        return console.log(`${num3} is the greatest value`)
    } else if ((num1 === num2) && (num2 === num3)) {
        return console.log("All three values are equivalent to each other.") 
    } else if (num2 === num3) {
        return console.log(`${num2} and ${num3} are tied for the greatest value`)
    } else if (num1 === num3) {
        return console.log(`${num1} and ${num3} are tied for the greatest value`)
    } else if (num1 === num2) {
        return console.log(`${num1} and ${num2} are tied for the greatest value`)
    } else {
        return console.log("Huh? What is this test case that I forgot to account for?");
    }
}

greatest(num1, num2, num3)

// https://stackoverflow.com/questions/17907455/how-to-get-numeric-value-from-a-prompt-box this appears to solve my issue with strings being converted to 0. the + typecast is not necessary, and parseInt() is also not necessary, it seems.

// okay, i just had to rearrange one more set of conditional statements in order to get the functionality i need. But the console is still outputting "undefined" underneath the correct output for each test case. 

// i think i am still misusing the return statements. 