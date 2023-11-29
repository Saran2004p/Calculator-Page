function clearDisplay() {
    document.calculatorForm.display.value = '';
}

function deleteLastCharacter() {
    var currentValue = document.calculatorForm.display.value;
    document.calculatorForm.display.value = currentValue.slice(0, -1);
}

function appendCharacter(character) {
    document.calculatorForm.display.value += character;
}

function calculateResult() {
    var result = eval(document.calculatorForm.display.value);
    document.calculatorForm.display.value = result;
}
