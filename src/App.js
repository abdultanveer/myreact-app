import { createContext } from "react";
import "./App.css";
import ComponentA from "./hooks/contextReducer/ComponentA";
import ComponentB from "./hooks/contextReducer/ComponentB";


export const ThemeContext = createContext(null);
const initialState = 0
const reducer = (state,action) => {

  switch(action){
      case 'increment': return state+1
      case 'decrement' : return state -1
      case 'reset':   return initialState
      default: return state

  }
}
function App() {
  return (
    <div>
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>
    </div>
  );
}

export default App;
