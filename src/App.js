import { useSelector, useDispatch } from "react-redux";
import { incrementAsync, decrementAsync, selectCount, selectLoading } from "./counterSlice";
import "./App.css";

function App() {
  const count = useSelector(selectCount);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <button disabled={loading} onClick={() => dispatch(incrementAsync())}>+</button>
        <span>{count}</span>
        <button disabled={loading} onClick={() => dispatch(decrementAsync())}>-</button>
        {loading && <p>pls standby...</p>}
      </header>
    </div>
  );
}

export default App;
