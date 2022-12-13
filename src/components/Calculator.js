import React from 'react';
import './styles/Calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <from>
          <input type="text" value="0" />
        </from>
        <div className="keypad">
          <button type="button">AC</button>
          <button type="button" name="">+/-</button>
          <button type="button" name="%">%</button>
          <button type="button" className="color-i" name="/">&divide;</button>
          <button type="button" name="7">7</button>
          <button type="button" name="8">8</button>
          <button type="button" name="9">9</button>
          <button type="button" className="color-i" name="x">&times;</button>
          <button type="button" name="4">4</button>
          <button type="button" name="5">5</button>
          <button type="button" name="6">6</button>
          <button type="button" className="color-i" name="-">&ndash;</button>
          <button type="button" name="1">1</button>
          <button type="button" name="2">2</button>
          <button type="button" name="3">3</button>
          <button type="button" className="color-i" name="+">+</button>
          <button type="button" name="0" className="zero">0</button>
          <button type="button" name=".">.</button>
          <button type="button" className="color-i">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
