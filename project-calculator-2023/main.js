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
const sevenNumber = document.getElementById('seven');
const eightNumber = document.getElementById('eight');
const sumButton = document.getElementById('sum');
const equalButton = document.getElementById('equal')

// sevenNumber.addEventListener('click', e => {
//         const value = e.target.value;
//         operandA = Number(output.innerHTML += value);
// });
    
sumButton.addEventListener('click', e => {
    operator = '+';
    operandA = accumulator;
    accumulator = 0;
    console.log(operandA);
    output.innerHTML = '';

    
});

// eightNumber.addEventListener('click', e => {
//         const value = e.target.value;
//         operandB = Number(output.innerHTML += value);
// });

equalButton.addEventListener('click', equalTo);

// function myFunctionB(e) {
//     const value = e.target.value;
//     operandB = output.innerHTML += value;
// }

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', e => {
    output.innerHTML = '';
    operandA = 0;
    operandB = 0;
    operator = '';
});
 
const output = document.querySelector('#output');

// function test() {
//     //console.log('crap')
//     let result = operation(operandA, operator, operandB);
//     console.log(result);
//     operandA = result;
//     return output.innerHTML = result;
// }

function equalTo() {
    console.log(operandA);
    console.log(accumulator);
    
    operandB = accumulator;
    const result = operation(operandA, operator, operandB);
    output.innerHTML = result;
    operandB = 0;
    return operandA = result;
}


// function pressSum() {
//     sumButton.addEventListener('click', e => {
//         operator = '+';
//         output.innerHTML='';
//     })
// }

allNumberBtns.forEach(element => {
    element.addEventListener('click', myFunction);
});

function myFunction(e) {
    const value = e.target.value;
    const result= Number(output.innerHTML += value);
    accumulator = result;
    
    console.log(accumulator);
};