import "./App.css";
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(4);
  const [user, setUser] = useState({ name: "Lillian", age: 999 });

  const addHandler = () => {
    setTimeout(() => setCounter((prevCounter) => prevCounter + 1), 1000);
  };

  const lessHandler = () => {
    // alert('-1');
    setCounter(counter - 1);
  };

  const upDateUserHandler = () => {
    // const newUser = Object.assign({} ,user);
    // newUser.name = 'xiaoyanng';
    // setUser(newUser);
    setUser({ ...user, name: "xx" });
  };

  return (
    <div className={"app"}>
      <h1>
        {counter}--{user.name}--{user.age}
      </h1>
      {/* <button onClick={lessHandler}>-</button> */}
      <button onClick={addHandler}>+</button>
      <button onClick={upDateUserHandler}>3</button>
    </div>
  );
};

export default App;
