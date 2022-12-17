function calculator(num1, num2, operator) {
    const add = function(a, b) {
        return a + b
    }

    const sub = function(a, b) {
        return a - b``
    }

    const div = function(a, b) {
        return a / b
    }

    const mult = function(a, b) {
        return a * b
    }

    if (operator === "+") return add(a, b);
    if (operator === "-") return sub(a, b);
    if (operator === "/") return div(a, b);
    if (operator === "*") return mult(a, b);
}

calculator(5, 6, "+");

// reference errors