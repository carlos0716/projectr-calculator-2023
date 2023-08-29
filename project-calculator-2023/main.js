//Math functions
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

    if (b !== 0) {
        let result =  (a / b).toFixed(4);
        return Number(result);
    } else {
        console.log('error');
        return;
    }
}

function percentage(a, b) {
    let percentage = b/100;
    return a * percentage;
}

function potence(a, b) {
    let result = (a ** b).toFixed(4);
    return Number(result);
}

//Global variables
let operandA;
let operandB;
let operator;
let accumulator;
let clickCounter = 0;

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
 } else if (operator === '%') {
    let result = percentage(operandA, operandB);
    return result;
 } else if (operator === '**') {
    let result = potence(operandA, operandB);
    return result;
 }
}

// Operation functions
const allNumberBtns = document.querySelectorAll('.number');
const sumButton = document.getElementById('sum');
const restButton = document.getElementById('rest');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const equalButton = document.getElementById('equal');
const percentageButton = document.getElementById('percentage')
const dotButton = document.getElementById('dot');
const backspaceButton = document.getElementById('backspace');
const squareButton = document.getElementById('square');

sumButton.addEventListener('click', e => {
    operator = '+';
    operandA = accumulator;
    accumulator = 0;
    output.innerHTML = '';
    clickCounter = 0;
})

restButton.addEventListener('click', e => {
    operator = '-';
    operandA = accumulator;
    accumulator = 0;
    output.innerHTML = '';
    clickCounter = 0;
});

multiplyButton.addEventListener('click', e => {
    operator = '*';
    operandA = accumulator;
    accumulator = 0;
    output.innerHTML = '';
    clickCounter = 0;
});

divideButton.addEventListener('click', e => {
    operator = '/';
    operandA = accumulator;
    accumulator = 0;
    output.innerHTML = '';
    clickCounter = 0;
});

percentageButton.addEventListener('click', e => {
    operator = '%';
    operandA = accumulator;
    accumulator = 0;
    output.innerHTML = '';
    clickCounter = 0;
});

squareButton.addEventListener('click', e => {
    operator = '**';
    operandA = accumulator;
    accumulator = 0;
    output.innerHTML = '';
    clickCounter = 0;
});

const clearButton = document.getElementById('clear');

clearButton.addEventListener('click', e => {
    output.innerHTML = '';
    operandA = undefined;
    operandB = undefined;
    operator = undefined;
    accumulator = undefined;
    clickCounter = 0;
});
 
const output = document.querySelector('#output');

backspaceButton.addEventListener('click', e => {
  output.innerHTML = output.innerHTML.slice(0, output.innerHTML.length -1);  
});

equalButton.addEventListener('click', e => {
    if (operator === undefined) {
        equalButton.disbled = true;
    } else {
        operandB = accumulator;
        const result = operation(operandA, operator, operandB);
        output.innerHTML = result;
        operandA = undefined;
        operandB = undefined;
        operator = undefined;
        accumulator = result;
        clickCounter = 0;
    }
});

allNumberBtns.forEach(element => {
    element.addEventListener('click', myFunction);
});

function myFunction(e) {
    const value = e.target.value;
    const result= Number(output.innerHTML += value);
    accumulator = result;
}   

dotButton.addEventListener('click', e => {
    if (clickCounter === 0){
        output.innerHTML += '.';
        clickCounter++;
    }else if (clickCounter > 1) {
        dotButton.disabled = true;
    }
});

// Numeric Pad Functions
function numPad(event) {
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3'
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7'
        || event.key == '8' || event.key == '9') {
    const value = event.key;
    const result = Number(output.innerHTML += value);
    accumulator = result;
    }
}

function sumPad(e){
    if(e.key === '+') {
        operator = '+';
        operandA = accumulator;
        accumulator = 0;
        output.innerHTML = '';
        clickCounter = 0;        
    }
}

function restPad(e) {
    if (e.key === '-') {
        operator = '-';
        operandA = accumulator;
        accumulator = 0;
        output.innerHTML = '';
        clickCounter = 0;        
    }
}

function multiplyPad(e) {
    if (e.key === '*') {
    operator = '*';
    operandA = accumulator;
    accumulator = 0;
    output.innerHTML = '';
    clickCounter = 0;        
    }
}

function divisionPad (e) {
    if (e.key === '/') {
        e.preventDefault();
        operator = '/';
        operandA = accumulator;
        accumulator = 0;
        output.innerHTML = '';
        clickCounter = 0;               
    }
}

function equalPad(e) {
    if(e.key === 'Enter') {
        if (operator === undefined) {
            equalButton.disbled = true;
        } else {
            operandB = accumulator;
            const result = operation(operandA, operator, operandB);
            output.innerHTML = result;
            operandA = undefined;
            operandB = undefined;
            operator = undefined;
            accumulator = result;
            clickCounter = 0;
        }        
    }
}

window.addEventListener('keyup', numPad); // this is how you add an evenlistener to a key event
window.addEventListener('keydown', sumPad);
window.addEventListener('keydown', restPad);
window.addEventListener('keydown', multiplyPad);
window.addEventListener('keydown', divisionPad);
window.addEventListener('keydown', equalPad);