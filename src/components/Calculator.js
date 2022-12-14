import React from 'react';
import './styles/Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    const handleClick = (e) => {
      const result = calculate(this.state, e.target.name);

      this.setState(result);
    };
    const items = this.state;
    return (
      <div className="container">
        <div className="screen-window">
          <span>
            {items.total}
            {items.operation}
            {items.next}
          </span>
        </div>
        <div className="keypad">
          <button onClick={handleClick} type="button" name="AC">AC</button>
          <button onClick={handleClick} type="button" name="+/-">+/-</button>
          <button onClick={handleClick} type="button" name="%">%</button>
          <button onClick={handleClick} type="button" className="color-i" name="÷">&divide;</button>
          <button onClick={handleClick} type="button" name="7">7</button>
          <button onClick={handleClick} type="button" name="8">8</button>
          <button onClick={handleClick} type="button" name="9">9</button>
          <button onClick={handleClick} type="button" className="color-i" name="x">&times;</button>
          <button onClick={handleClick} type="button" name="4">4</button>
          <button onClick={handleClick} type="button" name="5">5</button>
          <button onClick={handleClick} type="button" name="6">6</button>
          <button onClick={handleClick} type="button" className="color-i" name="-">&ndash;</button>
          <button onClick={handleClick} type="button" name="1">1</button>
          <button onClick={handleClick} type="button" name="2">2</button>
          <button onClick={handleClick} type="button" name="3">3</button>
          <button onClick={handleClick} type="button" className="color-i" name="+">+</button>
          <button onClick={handleClick} type="button" name="0" className="zero">0</button>
          <button onClick={handleClick} type="button" name=".">.</button>
          <button onClick={handleClick} type="button" name="=" className="color-i">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
