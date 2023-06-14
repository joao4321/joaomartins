import React, { useState } from 'react';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleDigitClick = (digit) => {
    if (waitingForSecondOperand) {
      setDisplayValue(digit.toString());
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? digit.toString() : displayValue + digit);
    }
  };

  const handleDecimalClick = () => {
    if (waitingForSecondOperand) {
      setDisplayValue('0.');
      setWaitingForSecondOperand(false);
    } else if (displayValue.indexOf('.') === -1) {
      setDisplayValue(displayValue + '.');
    }
  };

  const handleOperatorClick = (selectedOperator) => {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = performCalculation();
      setDisplayValue(result.toString());
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(selectedOperator);
  };

  const performCalculation = () => {
    const inputValue = parseFloat(displayValue);

    if (operator === '+') {
      return firstOperand + inputValue;
    } else if (operator === '-') {
      return firstOperand - inputValue;
    } else if (operator === '*') {
      return firstOperand * inputValue;
    } else if (operator === '/') {
      return firstOperand / inputValue;
    }

    return inputValue;
  };

  const handleEqualClick = () => {
    if (!operator) return;

    const result = performCalculation();
    setDisplayValue(result.toString());
    setFirstOperand(result);
    setOperator(null);
    setWaitingForSecondOperand(true);
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="keypad">
        <div className="row">
          <button className="btn" onClick={() => handleClearClick()}>C</button>
          <button className="btn" onClick={() => handleOperatorClick('/')}>/</button>
        </div>
        <div className="row">
          <button className="btn" onClick={() => handleDigitClick(7)}>7</button>
          <button className="btn" onClick={() => handleDigitClick(8)}>8</button>
          <button className="btn" onClick={() => handleDigitClick(9)}>9</button>
          <button className="btn" onClick={() => handleOperatorClick('*')}>*</button>
        </div>
        <div className="row">
          <button className="btn" onClick={() => handleDigitClick(4)}>4</button>
          <button className="btn" onClick={() => handleDigitClick(5)}>5</button>
          <button className="btn" onClick={() => handleDigitClick(6)}>6</button>
          <button className="btn" onClick={() => handleOperatorClick('-')}>-</button>
        </div>
        <div className="row">
          <button className="btn" onClick={() => handleDigitClick(1)}>1</button>
          <button className="btn" onClick={() => handleDigitClick(2)}>2</button>
          <button className="btn" onClick={() => handleDigitClick(3)}>3</button>
          <button className="btn" onClick={() => handleOperatorClick('+')}>+</button>
        </div>
        <div className="row">
          <button className="btn" onClick={() => handleDigitClick(0)}>0</button>
          <button className="btn" onClick={() => handleDecimalClick()}>.</button>
          <button className="btn" onClick={() => handleEqualClick()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
