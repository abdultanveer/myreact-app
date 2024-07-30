import "./App.css";
import Inline from "./styles/Inline";
import StyleSheet from './styles/StyleSheet';

import styles from './styles/applyStyles.css';
import  './styles/applyStyles.module.css';



function App() {
  return (
    <div className="App">
    <h1 className="error">ERROR</h1>
    <h1 className="success">Success</h1>
     <StyleSheet  primary = {true}/>
     <Inline/>
    </div>
  );
}

export default App;
