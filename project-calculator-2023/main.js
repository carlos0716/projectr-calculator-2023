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
 }
}

const allNumberBtns = document.querySelectorAll('.number');
const sumButton = document.getElementById('sum');
const restButton = document.getElementById('rest');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const equalButton = document.getElementById('equal');
const percentageButton = document.getElementById('percentage')
const dotButton = document.getElementById('dot');
const backspaceButton = document.getElementById('backspace');
// sumButton.addEventListener('click', e => {
//     operator = '+';
//     operandA = accumulator;
//     accumulator = 0;
//     //console.log(operandA);
//     output.innerHTML = '';
// });

sumButton.addEventListener('click', e => {
    operandA = accumulator;
    if((accumulator !== 0)) {
        console.log('ok');
    } else {
        operator = '+';
    operandA = accumulator;
    accumulator = 0;
    //console.log(operandA);
    output.innerHTML = '';
    }
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
    //console.log(operandA);
    output.innerHTML = '';
    clickCounter = 0;
});

divideButton.addEventListener('click', e => {
    operator = '/';
    operandA = accumulator;
    accumulator = 0;
    //console.log(operandA);
    output.innerHTML = '';
    clickCounter = 0;
});

percentageButton.addEventListener('click', e => {
    operator = '%';
    operandA = accumulator;
    accumulator = 0;
    //console.log(operandA);
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
})
//equalButton.addEventListener('click', equalTo);

equalButton.addEventListener('click', e => {
   
        operandB = accumulator;
        const result = operation(operandA, operator, operandB);
        output.innerHTML = result;
        operandA = undefined;
        operandB = undefined;
        accumulator = result;
        clickCounter = 0;
});

// function equalTo() {
    
//     operandB = accumulator;
//     const result = operation(operandA, operator, operandB);
//     output.innerHTML = result;
//     operandA = 0;
//     operandB = 0;
//     accumulator = result;
// }

allNumberBtns.forEach(element => {
    element.addEventListener('click', myFunction);
});

function myFunction(e) {
    const value = e.target.value;
    const result= Number(output.innerHTML += value);
    accumulator = result;
    
    //console.log(accumulator);
}   

dotButton.addEventListener('click', e => {
    if (clickCounter === 0){
        output.innerHTML += '.';
        clickCounter++;
    }else if (clickCounter > 1) {
        dotButton.disabled = true;
    }
});

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



window.addEventListener('keyup', numPad);