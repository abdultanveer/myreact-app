import { createContext } from "react";
import "./App.css";
import CounterThree from "./hooks/useReducer/CounterThree";


export const ThemeContext = createContext(null);

function App() {
  return (
    <div>
      <CounterThree/>
    </div>
  );
}

export default App;
