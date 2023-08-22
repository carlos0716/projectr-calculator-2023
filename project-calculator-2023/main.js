function add(a, b) {
    let result = (a + b).toFixed(4);
    return Number(result)
}

function rest(a, b) {
    let result = (a - b).toFixed(4);
    return Number(result);
}

function multiply(a, b) {
    let result = (a * b).toFixed(4);
    return Number(result);
}

function divide(a, b) {

    if (b === 0) {
        console.log('ERROR');
        return;
    }
    let result =  (a / b).toFixed(4);
    return Number(result);
}

let operandA;
let operandB;
let operator;

function operation(operandA, operator, operandB) {
 if (operator === '+') {
    let result = add(operandA, operandB);
    return result;
 } else if (operator === '-') {
    let result = rest(operandA, operandB);
    return result;
 } else if (operator === '*') {
    let result = multiply(operandA, operandB);
    return result;
 } else if (operator === '/') {
    let result = divide(operandA, operandB);
    return result;
 }
}


