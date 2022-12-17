import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="calculator">
        <input type="text" value={0} className="screen" />
        <div id="numbers">
          <button type="button" id="AC" value="AC" onClick={null}>Ac</button>
          <button type="button" id="+/-" value="+/-" onClick={null}>+/-</button>
          <button type="button" id="%" value="%" onClick={null}>%</button>
          <button type="button" id="+" value="+" className="special" onClick={null}>&divide;</button>
          <button type="button" id="7" value="7" onClick={null}>7</button>
          <button type="button" id="8" value="8" onClick={null}>8</button>
          <button type="button" id="9" value="9" onClick={null}>9</button>
          <button type="button" id="x" value="x" className="special" onClick={null}>&times;</button>
          <button type="button" id="4" value="4" onClick={null}>4</button>
          <button type="button" id="5" value="5" onClick={null}>5</button>
          <button type="button" id="6" value="6" onClick={null}>6</button>
          <button type="button" id="-" value="-" className="special" onClick={null}>-</button>
          <button type="button" id="1" value="1" onClick={null}>1</button>
          <button type="button" id="2" value="2" onClick={null}>2</button>
          <button type="button" id="3" value="3" onClick={null}>3</button>
          <button type="button" id="+" value="+" className="special" onClick={null}>+</button>
          <button type="button" id="3" value="3" className="zero" onClick={null}>0</button>
          <button type="button" id="." value="." onClick={null}>.</button>
          <button type="button" id="=" value="=" className="special" onClick={null}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
