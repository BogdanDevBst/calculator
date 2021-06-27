import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';

import Result from './components/Result';
import Button from './components/Button';

import './App.css';

const App = () => {
  const [preState, setPreState] = useState('');
  const [curState, setCurState] = useState('');
  const [input, setInput] = useState('0');
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = e => {
    if (curState.includes('.') && e.target.innerText === '.') return;

    if (total) {
      setPreState('');
    }

    curState ? setCurState(pre => pre + e.target.innerText) : setCurState(e.target.innerText);
    setTotal(false);
  };

  useEffect(() => {
    setInput(curState);
  }, [curState]);

  useEffect(() => {
    setInput('0');
  }, []);

  const operatorType = e => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (curState === '') return;
    if (preState !== '') {
      equals();
    } else {
      setPreState(curState);
      setCurState('');
    }
  };

  const equals = e => {
    if (e?.target.innerText === '=') {
      setTotal(true);
    }
    let cal;
    switch (operator) {
      case '/':
        cal = String(parseFloat(preState) / parseFloat(curState));
        break;

      case '+':
        cal = String(parseFloat(preState) + parseFloat(curState));
        break;
      case 'X':
        cal = String(parseFloat(preState) * parseFloat(curState));
        break;
      case '-':
        cal = String(parseFloat(preState) - parseFloat(curState));
        break;
      default:
        return;
    }
    setInput('');
    setPreState(cal);
    setCurState('');
  };

  const minusPlus = () => {
    if (curState.charAt(0) === '-') {
      setCurState(curState.substring(1));
    } else {
      setCurState('-' + curState);
    }
  };

  const percent = () => {
    preState
      ? setCurState(String((parseFloat(curState) / 100) * preState))
      : setCurState(String(parseFloat(curState) / 100));
  };

  const backspace = () => {
    setInput(input.slice(0, -1));
  };

  const reset = () => {
    setPreState('');
    setCurState('');
    setInput('0');
  };

  return (
    <div className="container calculator">
      <div className="m-10 box-shadow rounded-md">
        <Result>
          {input !== '' || input === '0' ? (
            <NumberFormat value={input} displayType={'text'} thousandSeparator={true} />
          ) : (
            <NumberFormat value={preState} displayType={'text'} thousandSeparator={true} />
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
            <Button type="orange" click={operatorType}>
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
            <Button type="orange" click={operatorType}>
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
            <Button type="orange" click={operatorType}>
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
            <Button type="orange" click={operatorType}>
              +
            </Button>
            <Button className="numbers rounded-bl-md p-6" click={inputNum}>
              0
            </Button>
            <Button type="ivory" click={inputNum}>
              .
            </Button>
            <Button type="ivory" click={backspace}>
              🥷
            </Button>
            <Button type="darkOrange" click={equals}>
              =
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
