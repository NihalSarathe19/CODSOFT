// script.js

function addNumber(num) {
    const display = document.getElementById('calc-display');
    display.value += num;
}

function addOperator(operator) {
    const display = document.getElementById('calc-display');
    display.value += ` ${operator} `;
}

function clearScreen() {
    document.getElementById('calc-display').value = '';
}

function deleteLastEntry() {
    const display = document.getElementById('calc-display');
    display.value = display.value.slice(0, -1);
}

function computeResult() {
    const display = document.getElementById('calc-display');
    try {
        display.value = eval(display.value.replace(/x/g, '*'));
    } catch (error) {
        display.value = 'Error';
    }
}
