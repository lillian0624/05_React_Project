import "./App.css";
import { useState } from "react";

const App = () => {
  const result = useState(4);
  // let counter = result[0];
  // let setCounter =result[1];

  const [counter, setCounter]=result;
 
  const addHandler = () => {

    setCounter(counter+1);
  
  };

  const lessHandler = () => { 
    // alert('-1');
   setCounter(counter-1);
    
  };

  return (
    <div className={"app"}>
      <h1>{counter}</h1>
      <button onClick={lessHandler}>-</button>
      <button onClick={addHandler}>+</button>
    </div>
  );
};

export default App;
