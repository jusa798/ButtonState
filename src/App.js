import react, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);

  const[userInputNumber, setuserInput] = useState(0)
  
  const handleIncrement = () => {
    setNumber((number) => number + 1);
  };

  const handleDecrement = () => {
    setNumber((number) => number - 1);
  };

  const handleMultiply = () => {
    setNumber((number) => number * 2 );
  };
  const handleDivide = () => {
    setNumber((number) => number /2 )
  };


const setInput = () => {
  const inNumber = parseInt(userInputNumber);
  setNumber(inNumber);
}
 const getInput= (e) => {
  setuserInput(e.target.value)
 }


  return (
    <div className='app-container'>
      <div className='number'>{number}</div>
      <div>
        <button onClick={() => handleIncrement()}>Increment</button>
        <button onClick={() => handleDecrement()}>Decrement</button>
        <button onClick={() => handleMultiply()}>Multiply</button>
        <button onClick={() => handleDivide()}>Divide</button>
        <input onChange={(e)=> getInput(e)}></input>
        <button onClick ={()=> setInput()}>SUBMIT</button>
      </div>
    </div>
  );
}

export default App;

//homework 2 will be to add input and submit button, which becomes the state of number
