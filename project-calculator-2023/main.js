function add(a, b) {
    let result = (a + b);
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
let accumulator;

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

const allNumberBtns = document.querySelectorAll('.number');
const sumButton = document.getElementById('sum');
const restButton = document.getElementById('rest');
const equalButton = document.getElementById('equal')

sumButton.addEventListener('click', e => {
    operator = '+';
    operandA = accumulator;
    accumulator = 0;
    //console.log(operandA);
    output.innerHTML = '';
});

equalButton.addEventListener('click', equalTo);

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', e => {
    output.innerHTML = '';
    operandA = 0;
    operandB = 0;
    operator = '';
});
 
const output = document.querySelector('#output');

function equalTo() {
    operandB = accumulator;
    const result = operation(operandA, operator, operandB);
    output.innerHTML = result;
    operandA = 0;
    operandB = 0;
    accumulator = result;
}

allNumberBtns.forEach(element => {
    element.addEventListener('click', myFunction);
});

function myFunction(e) {
    const value = e.target.value;
    const result= Number(output.innerHTML += value);
    accumulator = result;
    
    //console.log(accumulator);
};

console.log(operandA);
console.log(operandB);
console.log(accumulator);