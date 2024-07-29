import "./App.css";
import ClassClick from "./components/ClassClick";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import Greet from "./components/Greet";
import Message from "./components/Message";
import UserGreeting from "./components/UserGreeting ";

function App() {
  return (
    <div className="App">
    <UserGreeting/>
    <FunctionClick/>
    <ClassClick/>
     <Counter/>
      <Greet name="ansari" alias="ascendion"></Greet>
      <Message name ="abdul" alias="tanveer" />
    </div>
  );
}

export default App;
