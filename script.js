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
                // Evaluate the expression
                try {
                    // Replace any `×` or `÷` with `*` or `/` for eval compatibility
                    currentInput = currentInput.replace('×', '*').replace('÷', '/');
                    currentInput = eval(currentInput).toString();
                } catch {
                    currentInput = 'Error';
                }
                display.value = currentInput; // Show result
                operator = ''; // Clear operator
            } else if (value === 'C') {
                // Clear the display and reset internal state
                currentInput = '';
                operator = '';
                previousInput = '';
                display.value = '';
            } else {
                // Handle operator and numbers
                if (['/', '*', '-', '+'].includes(value)) {
                    // Avoid multiple operators
                    if (['/', '*', '-', '+'].includes(currentInput.slice(-1))) {
                        currentInput = currentInput.slice(0, -1);
                    }
                    currentInput += ` ${value} `;
                } else {
                    currentInput += value;
                }
                display.value = currentInput; // Update display
            }
        });
    });
});
