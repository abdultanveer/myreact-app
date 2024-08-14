import { createContext, useReducer } from "react";
import "./App.css";
import DataFetchingOne from "./hooks/useReducer/DataFetchingOne";

function App() {
  return (
    <div>
      <DataFetchingOne />
    </div>
  );
}

export default App;
