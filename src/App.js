import { createContext } from "react";
import "./App.css";
import CounterTwo from "./hooks/useReducer/CounterTwo";


export const ThemeContext = createContext(null);

//install axios
function App() {
  return (
    <div>
      <CounterTwo/>
    </div>
  );
}

export default App;
