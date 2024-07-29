import "./App.css";
import Greet from "./components/Greet";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
     
      <Greet name="abdul" alias="tanveer"></Greet>
      <Message />
    </div>
  );
}

export default App;
