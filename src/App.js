import { useSelector, useDispatch } from "react-redux";
import { incrementAsync, decrementAsync, selectCount } from "./counterSlice";
import "./App.css";

function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => dispatch(incrementAsync())}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrementAsync())}>-</button>
      </header>
    </div>
  );
}

export default App;
