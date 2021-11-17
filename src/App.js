import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';

import Result from './components/Result';
import Button from './components/Button';

import './App.css';

const App = () => {
  const [prevState, setPrevState] = useState('');
  const [currState, setCurrState] = useState('');
  const [input, setInput] = useState('0');
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = e => {
    if (currState.includes('.') && e.target.innerText === '.') {
      return null;
    }
    if (total) {
      setPrevState('');
    }
    setCurrState(prev => prev + e.target.innerText);
    setTotal(false);
  };

  useEffect(() => {
    setInput(currState);
  }, [currState, prevState]);

  useEffect(() => {
    setInput('0');
  }, []);

  const setOperatorType = e => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (currState === '') return;
    if (prevState !== '') {
      calculateResult();
    } else {
      setPrevState(currState);
      setCurrState('');
    }
  };

  const calculateResult = e => {
    if (e?.target.innerText === '=') {
      setTotal(true);
    }
    let calc;
    switch (operator) {
      case '/':
        calc = String(parseFloat(prevState) / parseFloat(currState));
        break;

      case '+':
        calc = String(parseFloat(prevState) + parseFloat(currState));
        break;
      case 'X':
        calc = String(parseFloat(prevState) * parseFloat(currState));
        break;
      case '-':
        calc = String(parseFloat(prevState) - parseFloat(currState));
        break;
      default:
        return;
    }
    setInput('');
    setPrevState(calc);
    setCurrState('');
  };

  const minusPlus = () => {
    if (currState.charAt(0) === '-') {
      setCurrState(currState.substring(1));
    } else {
      setCurrState('-' + currState);
    }
  };

  const percent = () => {
    prevState
      ? setCurrState(String((parseFloat(currState) / 100) * prevState))
      : setCurrState(String(parseFloat(currState) / 100));
  };

  const deleteLast = () => {
    setInput(input.slice(0, -1));
  };

  const reset = () => {
    setPrevState('');
    setCurrState('');
    setInput('0');
  };

  return (
    <div className="container calculator">
      <div className="m-10 box-shadow rounded-md">
        <Result>
          {input !== '' || input === '0' ? (
            <NumberFormat value={input} displayType={'text'} thousandSeparator={true} />
          ) : (
            <NumberFormat value={prevState} displayType={'text'} thousandSeparator={true} />
          )}
        </Result>
        <div className="">
          <div className="grid grid-cols-4 divide-x divide-y rounded-b-md">
            <Button type="gray" click={reset}>
              C
            </Button>
            <Button type="gray" click={minusPlus}>
              +/-
            </Button>
            <Button type="gray" click={percent}>
              %
            </Button>
            <Button type="orange" click={setOperatorType}>
              /
            </Button>
            <Button type="ivory" click={inputNum}>
              7
            </Button>
            <Button type="ivory" click={inputNum}>
              8
            </Button>
            <Button type="ivory" click={inputNum}>
              9
            </Button>
            <Button type="orange" click={setOperatorType}>
              X
            </Button>
            <Button type="ivory" click={inputNum}>
              4
            </Button>
            <Button type="ivory" click={inputNum}>
              5
            </Button>
            <Button type="ivory" click={inputNum}>
              6
            </Button>
            <Button type="orange" click={setOperatorType}>
              -
            </Button>
            <Button type="ivory" click={inputNum}>
              1
            </Button>
            <Button type="ivory" click={inputNum}>
              2
            </Button>
            <Button type="ivory" click={inputNum}>
              3
            </Button>
            <Button type="orange" click={setOperatorType}>
              +
            </Button>
            <Button className="numbers rounded-bl-md p-6" click={inputNum}>
              0
            </Button>
            <Button type="ivory" click={inputNum}>
              .
            </Button>
            <Button type="ivory" click={deleteLast}>
              🥷
            </Button>
            <Button type="darkOrange" click={calculateResult}>
              =
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
