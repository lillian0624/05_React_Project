/*类组件
import React from "react";

class App extends React.Component {
  render() {
    return <div>I am a module</div>;
  }
}
*/
import Logs from "./components/Logs/Logs";

const App = () => {
  return (
    <div>
      <Logs />
    </div>
  );
};


export default App;
