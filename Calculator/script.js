function clearDisplay() {
    document.getElementById('display').innerText = '0';
  }
  
  function deleteLast() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1) || '0';
  }
  
  function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
      display.innerText = value;
    } else {
      display.innerText += value;
    }
  }
  
  function calculateResult() {
    const display = document.getElementById('display');
    try {
      let expression = display.innerText;
      // Handling percentage calculation
      expression = expression.replace(/%/g, '*0.01');
      display.innerText = eval(expression);
    } catch (error) {
      display.innerText = 'Error';
    }
  }
  