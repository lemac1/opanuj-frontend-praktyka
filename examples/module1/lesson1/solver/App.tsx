import React, { useState } from 'react';
import { add, divide, multiply, substract } from './functions';
import {CalculatorButton} from './Button'

const App = () => {
  const [valueA, setValueA] = useState<number>(0);
  const [valueB, setValueB] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);
  const [error, setError] = useState<string>("");
  

  const calculate = (operation: (a: number, b: number) => number | string
  ) => {
    clear()
    let operationResult = operation(valueA, valueB);
    
    if(isNaN(+operationResult))
    setError(operationResult as string)
    else
     setResult(operationResult as number);
  };

  function checkValueA(value: string){
    clear()
    if(isNaN(+value))
     setError('Value A is not a number');
    else
    setValueA(parseFloat(value));
  }

  function checkValueB(value: string){
    clear()
    if(isNaN(+value))
     setError('Value B is not a number');
    else
    setValueB(parseFloat(value));
  }

  function clear(){
    setError("")
    setResult("")
  }

  return (
    <div>  
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={valueA}
          onChange={(e) => checkValueA(e.target.value)}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={valueB}
          onChange={(e) => checkValueB(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
       <CalculatorButton calculate={() => calculate(add)} label={'+'}></CalculatorButton>
       <CalculatorButton calculate={() => calculate(substract)} label={'-'}></CalculatorButton>
       <CalculatorButton calculate={() => calculate(multiply)} label={'*'}></CalculatorButton>
       <CalculatorButton calculate={() => calculate(divide)} label={'/'}></CalculatorButton>
      </div>
      { error === "" ?(
      <div>Result: {result}</div> ):(
      <div>Error: {error}</div>)
      }
    </div>
  );
};

export default App;
