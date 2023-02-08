import react, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    setNumber((number) => number + 1);
  };

  const handleDecrement = () => {
    setNumber((number) => number - 1);
  };

  return (
    <div className='app-container'>
      <div className='number'>{number}</div>
      <div>
        <button onClick={() => handleIncrement()}>Increment</button>
        <button onClick={() => handleDecrement()}>Decrement</button>
        {/* MULTIPLY */}
        {/* DIVIDE */}
        {/* SQUARE */}
      </div>
    </div>
  );
}

export default App;
