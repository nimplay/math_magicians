import React, { useState } from 'react';
import CalcButton from './buttons';
import calculate from '../logic/calculate';
import '../index.css';

function Calculator() {
  const [calculatorObj, setCalculatorObj] = useState({});

  const handleCalculate = (calcObj, text) => {
    setCalculatorObj(calculate(calcObj, text));
  };

  let display = 0;

  if (Object.keys(calculatorObj).length === 0 || (calculatorObj.total === null
    && calculatorObj.next === null
    && calculatorObj.operation === null)) {
    display = 0;
  } else {
    display = calculatorObj.next !== null ? calculatorObj.next : calculatorObj.total;
  }
  return (
    <div className="container">
      <div className="wrapper">
        <div className="screen Calculator-result">
          {display}
        </div>
        <CalcButton buttonName="AC" classButton="btn light-gray" onClick={handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="+/-" classButton="btn light-gray" onClick={handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="%" classButton="btn light-gray" onClick={handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="÷" classButton="btn orange" onClick={handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="7" onClick={handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="8" onClick={handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="9" onClick={handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="x" classButton="btn orange" onClick={handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="4" onClick={handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="5" onClick={handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="6" onClick={handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="+" classButton="btn orange" onClick={handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="1" onClick={handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="2" onClick={handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="3" onClick={handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="-" classButton="btn orange" onClick={handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="0" classButton="btn zero" onClick={handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="." onClick={handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="=" classButton="btn orange" onClick={handleCalculate} calcObj={calculatorObj} />
      </div>
    </div>
  );
}
export default Calculator;
