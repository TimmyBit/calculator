const result = document.querySelector('#result p');
const options = document.querySelectorAll('.option');
const backspace = document.querySelector('#backspace');
const erase = document.querySelector('#erase');

// Input
const inputValue = (option) => {
    if (option.classList.contains('operator') && result.textContent === '')
        return;

    result.textContent += option.textContent;

    if (option.classList.contains('plus')) {
        result.textContent += '+';
    } else if (option.classList.contains('minus')) {
        result.textContent += '-';
    } else if (option.classList.contains('multiply')) {
        result.textContent += '*';
    } else if (option.classList.contains('divide')) {
        result.textContent += '/';
    } else if (option.classList.contains('equal')) {
        const equal = eval(result.textContent);
        result.textContent += `=${equal}`;
        options.forEach((option) => {
            option.disabled = true;
            backspace.disabled = true;
        });
    }
};

// Backspace
const backspaceClick = () => {
    const newResult = result.textContent.slice(0, -1);
    result.textContent = newResult;
};

// Erase
const eraseClick = () => {
    result.textContent = '';
    options.forEach((option) => {
        option.disabled = false;
        backspace.disabled = false;
    });
};

// Listeners
options.forEach((option) => {
    option.addEventListener('click', () => inputValue(option));
});
backspace.addEventListener('click', backspaceClick);
erase.addEventListener('click', eraseClick);
