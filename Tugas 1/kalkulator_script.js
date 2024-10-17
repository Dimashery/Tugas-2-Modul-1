let expression = '';

function insert(num) {
    expression += num;
    document.getElementById('result').value = expression; // Update display
}

function calculate() {
    try {
        expression = expression.replace('^', '**');
        let result = eval(expression);
        document.getElementById('result').value = result; // Show result
        expression = ''; // Clear expression after calculation
    } catch (e) {
        document.getElementById('result').value = 'Error'; // Handle error
        expression = '';
    }
}

function clearScreen() {
    expression = ''; // Clear expression
    document.getElementById('result').value = ''; // Clear display
}

function deleteLast() {
    expression = expression.slice(0, -1); // Remove last character
    document.getElementById('result').value = expression; // Update display
}
