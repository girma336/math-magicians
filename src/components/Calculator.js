import React, { useState } from 'react';
import './styles/Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const newValue = {
    total: null,
    next: null,
    operation: null,
  };
  const [result, setRsualts] = useState(newValue);
  const { total, next, operation } = result;
  const handlClick = (e) => {
    setRsualts((obj) => calculate(obj, e.target.name));
  };
  return (
    <div className="container">
      <div className="screen-window">
        <span>
          {total}
          {operation}
          {next}
        </span>
      </div>
      <div className="keypad">
        <button type="button" name="AC" onClick={handlClick}>AC</button>
        <button type="button" name="+/-" onClick={handlClick}>+/-</button>
        <button type="button" name="%" onClick={handlClick}>%</button>
        <button type="button" name="÷" onClick={handlClick} className="color-i">÷</button>
        <button type="button" name="7" onClick={handlClick}>7</button>
        <button type="button" name="8" onClick={handlClick}>8</button>
        <button type="button" name="9" onClick={handlClick}>9</button>
        <button type="button" name="x" onClick={handlClick} className="color-i">x</button>
        <button type="button" name="4" onClick={handlClick}>4</button>
        <button type="button" name="5" onClick={handlClick}>5</button>
        <button type="button" name="6" onClick={handlClick}>6</button>
        <button type="button" name="-" onClick={handlClick} className="color-i">-</button>
        <button type="button" name="1" onClick={handlClick}>1</button>
        <button type="button" name="2" onClick={handlClick}>2</button>
        <button type="button" name="3" onClick={handlClick}>3</button>
        <button type="button" name="+" onClick={handlClick} className="color-i">+</button>
        <button type="button" name="0" onClick={handlClick} className="zero">0</button>
        <button type="button" name="." onClick={handlClick}>.</button>
        <button type="button" name="=" onClick={handlClick} className="color-i">=</button>
      </div>
    </div>
  );
};

export default Calculator;
