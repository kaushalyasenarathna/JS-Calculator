document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('.btn'));

    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.innerText;

            if (value === '=') {
                try {
                    currentInput = eval(currentInput).toString();
                } catch {
                    currentInput = 'Error';
                }
                operator = '';
            } else if (value === 'C') {
                // Clear the display and reset internal state
                currentInput = '';
                operator = '';
                previousInput = '';
                display.value = '';
            } else {
                if (['/', '*', '-', '+'].includes(value)) {
                    operator = value;
                    previousInput = currentInput;
                    currentInput += ` ${operator} `;
                } else {
                    currentInput += value;
                }
                display.value = currentInput;
            }
        });
    });
});
