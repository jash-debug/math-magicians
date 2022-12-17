import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const initialValue = {
    total: null,
    next: null,
    operation: null,
  };

  const [result, setResults] = useState(initialValue);
  const { total, operation, next } = result;

  const handleBtn = (btn) => {
    setResults((Object) => calculate(Object, btn));
  };

  return (
    <div id="calculator">
      <div className="screen">
        <p className="screenvalue">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </p>
      </div>
      <div id="numbers">
        <button type="button" id="AC" value="AC" onClick={(e) => handleBtn(e.target.id)}>Ac</button>
        <button type="button" id="+/-" value="+/-" onClick={(e) => handleBtn(e.target.id)}>+/-</button>
        <button type="button" id="%" value="%" onClick={(e) => handleBtn(e.target.id)}>%</button>
        <button type="button" id="&divide;" value="&divide;" className="special" onClick={(e) => handleBtn(e.target.id)}>&divide;</button>
        <button type="button" id="7" value="7" onClick={(e) => handleBtn(e.target.id)}>7</button>
        <button type="button" id="8" value="8" onClick={(e) => handleBtn(e.target.id)}>8</button>
        <button type="button" id="9" value="9" onClick={(e) => handleBtn(e.target.id)}>9</button>
        <button type="button" id="x" value="x" className="special" onClick={(e) => handleBtn(e.target.id)}>&times;</button>
        <button type="button" id="4" value="4" onClick={(e) => handleBtn(e.target.id)}>4</button>
        <button type="button" id="5" value="5" onClick={(e) => handleBtn(e.target.id)}>5</button>
        <button type="button" id="6" value="6" onClick={(e) => handleBtn(e.target.id)}>6</button>
        <button type="button" id="-" value="-" className="special" onClick={(e) => handleBtn(e.target.id)}>-</button>
        <button type="button" id="1" value="1" onClick={(e) => handleBtn(e.target.id)}>1</button>
        <button type="button" id="2" value="2" onClick={(e) => handleBtn(e.target.id)}>2</button>
        <button type="button" id="3" value="3" onClick={(e) => handleBtn(e.target.id)}>3</button>
        <button type="button" id="+" value="+" className="special" onClick={(e) => handleBtn(e.target.id)}>+</button>
        <button type="button" id="0" value="0" className="zero" onClick={(e) => handleBtn(e.target.id)}>0</button>
        <button type="button" id="." value="." onClick={(e) => handleBtn(e.target.id)}>.</button>
        <button type="button" id="=" value="=" className="special" onClick={(e) => handleBtn(e.target.id)}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
