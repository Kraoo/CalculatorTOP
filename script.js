function handleClick(value) {
    var screen = document.querySelector('.calculator-screen');
    if (value === 'C') {
        screen.value = '';
        return;
    }
    if (value === '=') {
        try {
            screen.value = eval(screen.value);
        } catch(error) {
            screen.value = 'Error';
        }
        return;
    }
    if (value === '√') {
        screen.value += 'Math.sqrt(';
        return;
    }
    if (value === '^') {
        screen.value += '**';
        return;
    }
    if (value === '%') {
        screen.value += '/100';
        return;
    }
    screen.value += value;
}

var buttons = [
    'C', '√', '^', '%',
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '00', '+',
    '=' 
];

var keysContainer = document.querySelector('.calculator-keys');
buttons.forEach(function(buttonValue) {
    var button = document.createElement('button');
    button.textContent = buttonValue;
    if (buttonValue === '00') {
        button.classList.add('doubleZeroBtn')
    }
    if (buttonValue === 'C') { 
        button.classList.add('c-button');
    }
    if (buttonValue === '=') { 
        button.classList.add('equal');
    }
    button.addEventListener('click', function() {
        handleClick(buttonValue);
    });
    keysContainer.appendChild(button);
});
