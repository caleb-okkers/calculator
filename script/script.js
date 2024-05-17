let buttons = document.querySelectorAll('.button')
let display = document.querySelector('.display')
let operators = document.querySelectorAll('.operator')
let equal = document.querySelector('.equal')
let clear = document.querySelector('.clear')
let currentInput = ''
let result = ''

for (const button of buttons) {
    button.addEventListener('click', () => {
        currentInput += button.value;
        display.innerHTML = currentInput; 
    });
}


for (const operator of operators) {
    operator.addEventListener('click', () => {
        currentInput += operator.value;
    if (display.textContent.match(/[*/+-]/)) return;
        display.textContent = currentInput;

    });
}

equal.addEventListener('click', () => {
    try {
        result = eval(currentInput);
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
});

clear.addEventListener('click', () => {
    display.textContent = '';
    currentInput = '';
})

