import React, { useState, useEffect } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [previousResult, setPreviousResult] = useState(null);

  // Handle button clicks
  const handleButtonClick = (value) => {
    if (value === 'C') {
      // Clear everything
      setDisplay('0');
      setExpression('');
      setPreviousResult(null);
    } else if (value === '=') {
      // Evaluate expression
      try {
        // Use Function constructor for safe evaluation
        const result = new Function(`return ${expression}`)();
        const formattedResult = parseFloat(result.toFixed(10)).toString();
        setDisplay(formattedResult);
        setPreviousResult(formattedResult);
        setExpression(formattedResult);
      } catch (error) {
        setDisplay('Error');
        setExpression('');
      }
    } else if (['+', '-', '*', '/'].includes(value)) {
      // Handle operators
      if (previousResult !== null) {
        // Start new calculation with previous result
        setExpression(`${previousResult}${value}`);
        setDisplay(value);
        setPreviousResult(null);
      } else {
        const lastChar = expression.slice(-1);
        const secondLastChar = expression.slice(-2, -1);
        
        // Prevent multiple consecutive operators
        if (['+', '-', '*', '/'].includes(lastChar)) {
          // Allow negative numbers after operator
          if (value === '-' && !['+', '-', '*', '/'].includes(secondLastChar)) {
            setExpression(`${expression}${value}`);
          } else {
            // Replace last operator
            setExpression(`${expression.slice(0, -1)}${value}`);
          }
        } else {
          setExpression(`${expression}${value}`);
        }
        setDisplay(value);
      }
    } else {
      // Handle numbers and decimal
      if (previousResult !== null) {
        // Start new calculation
        setExpression(value);
        setDisplay(value);
        setPreviousResult(null);
      } else {
        const newExpression = expression === '0' ? value : `${expression}${value}`;
        
        // Handle decimal points
        if (value === '.') {
          const lastSegment = expression.split(/[-+*/]/).pop();
          if (!lastSegment.includes('.')) {
            setExpression(newExpression);
            setDisplay(display === '0' || ['+', '-', '*', '/'].includes(display) 
              ? '0.' 
              : `${display.includes('.') ? display : display + '.'}`
            );
          }
        } else {
          setExpression(newExpression);
          setDisplay(
            display === '0' || 
            ['+', '-', '*', '/'].includes(display) 
              ? value 
              : display + value
          );
        }
      }
    }
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;
      if (/[0-9]/.test(key)) {
        handleButtonClick(key);
      } else if (key === '.') {
        handleButtonClick('.');
      } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        handleButtonClick(key);
      } else if (key === 'Enter' || key === '=') {
        handleButtonClick('=');
      } else if (key === 'Escape') {
        handleButtonClick('C');
      } else if (key === 'Backspace') {
        setExpression(prev => {
          const newExp = prev.slice(0, -1) || '0';
          setDisplay(newExp === '' ? '0' : newExp);
          return newExp;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expression, previousResult]);

  // Button layout
  const buttons = [
    'C', '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <div className="calculator">
      <div className="display">
        <div className="expression">{expression}</div>
        <div className="current-value">{display}</div>
      </div>
      <div className="keypad">
        {buttons.map((btn) => (
          <button
            key={btn}
            className={`button ${btn === '=' ? 'equals' : ''} ${btn === 'C' ? 'clear' : ''}`}
            onClick={() => handleButtonClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;