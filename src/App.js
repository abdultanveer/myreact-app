import "./App.css";
import Form from "./formcomponents/Form";
import LifeCycleA from "./formcomponents/LifeCycleA";
import ClassCounter from "./hooks/ClassCounter";
import HookCounter from "./hooks/HookCounter";
import PostForm from "./http/PostForm";
import Users from "./http/Users";

//install axios
function App() {
  return (
    <div>
      <HookCounter />
    </div>
  );
}

export default App;
