import { useState } from 'react';
import Result from './components/Result';

import './App.css';

const App = () => {
  const [result, setResult] = useState('');

  const handleClick = e => {
    setResult(result.concat(e.target.name));
  };

  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const clear = () => {
    setResult('');
  };

  const handleCalculation = e => {
    if (e.target.name === '=') {
      setResult();
    }
  };

  return (
    <div className="container calculator">
      <div className="m-10 box-shadow rounded-md">
        <Result value={result} />
        <div className="grid grid-cols-4 divide-x divide-y rounded-b-md">
          <button name="C" className="gray-operator p-6" onClick={clear}>
            C
          </button>
          <button name="+/-" className="gray-operator p-6" onClick={handleClick}>
            +/-
          </button>
          <button name="%" className="gray-operator p-6" onClick={handleClick}>
            %
          </button>
          <button name="/" className="orange-operator p-6" onClick={handleClick}>
            &divide;
          </button>
          <button name="7" className="numbers p-6" onClick={handleClick}>
            7
          </button>
          <button name="8" className="numbers p-6" onClick={handleClick}>
            8
          </button>
          <button name="9" className="numbers p-6" onClick={handleClick}>
            9
          </button>
          <button name="x" className="orange-operator p-6" onClick={handleClick}>
            &times;
          </button>
          <button name="4" className="numbers p-6" onClick={handleClick}>
            4
          </button>
          <button name="5" className="numbers p-6" onClick={handleClick}>
            5
          </button>
          <button name="6" className="numbers p-6" onClick={handleClick}>
            6
          </button>
          <button name="-" className="orange-operator p-6" onClick={handleClick}>
            &ndash;
          </button>
          <button name="1" className="numbers p-6" onClick={handleClick}>
            1
          </button>
          <button name="2" className="numbers p-6" onClick={handleClick}>
            2
          </button>
          <button name="3" className="numbers p-6" onClick={handleClick}>
            3
          </button>
          <button name="+" className="orange-operator p-6" onClick={handleClick}>
            +
          </button>
          <button name="0" className="numbers rounded-bl-md p-6" onClick={handleClick}>
            0
          </button>
          <button name="." className="numbers p-6" onClick={handleClick}>
            .
          </button>
          <button name="<-" className="numbers p-6" onClick={backspace}>
            🥷
          </button>
          <button className="orange-equal rounded-br-md p-6" onClick={handleCalculation}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
