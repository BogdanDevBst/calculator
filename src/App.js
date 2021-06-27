import React, { useEffect, useState } from 'react';
import Result from './components/Result';

import './App.css';
import Button from './components/Button';

const App = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');

  const [operation, setOperation] = useState('');

  const [result, setResult] = useState(0);

  useEffect(() => {
    console.log(result);
  }, [result]);

  const clickNumbers = val => {
    if (operation === '') {
      setFirstNumber(firstNumber + val);
    } else {
      setSecondNumber(secondNumber + val);
    }
  };

  const clickOperation = val => {
    setOperation(val);
  };

  const performOperation = () => {
    // eslint-disable-next-line default-case
    switch (operation) {
      case '+':
        setResult(Number(firstNumber) + Number(secondNumber));
        break;
      case '-':
        setResult(Number(firstNumber) - Number(secondNumber));
        break;
      case '*':
        setResult(Number(firstNumber) * Number(secondNumber));
        break;
      case '/':
        setResult(Number(firstNumber) / Number(secondNumber));
        break;
    }
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const clearInput = () => {
    setResult('');
  };

  return (
    <div className="container calculator">
      <div className="m-10 box-shadow rounded-md">
        <Result value={result} />
        <div className="">
          <div className="grid grid-cols-4 divide-x divide-y rounded-b-md">
            <Button type="gray" click={clearInput}>
              C
            </Button>
            <Button type="gray" click={clickOperation}>
              +/-
            </Button>
            <Button type="gray" click={clickOperation}>
              %
            </Button>
            <Button type="orange">&divide;</Button>
            <Button type="ivory" click={clickNumbers}>
              7
            </Button>
            <Button type="ivory" click={clickNumbers}>
              8
            </Button>
            <Button type="ivory" click={clickNumbers}>
              9
            </Button>
            <Button type="orange">&times;</Button>
            <Button type="ivory" click={clickNumbers}>
              4
            </Button>
            <Button type="ivory" click={clickNumbers}>
              5
            </Button>
            <Button type="ivory" click={clickNumbers}>
              6
            </Button>
            <Button type="orange">&minus;</Button>
            <Button type="ivory" click={clickNumbers}>
              1
            </Button>
            <Button type="ivory" click={clickNumbers}>
              2
            </Button>
            <Button type="ivory" click={clickNumbers}>
              3
            </Button>
            <Button type="orange">+</Button>
            <Button className="numbers rounded-bl-md p-6" click={clickNumbers}>
              0
            </Button>
            <Button type="ivory" click={clickOperation}>
              .
            </Button>
            <Button type="ivory" click={backspace}>
              🥷
            </Button>
            <Button type="darkOrange" click={performOperation}>
              =
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
