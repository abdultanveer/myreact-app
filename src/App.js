import "./App.css";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import Greet from "./components/Greet";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
    <FunctionClick/>
     <Counter/>
      <Greet name="ansari" alias="ascendion"></Greet>
      <Message name ="abdul" alias="tanveer" />
    </div>
  );
}

export default App;
