import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementAsync,
  decrementAsync,
  selectCount,
  selectLoading,
} from "../src/redux/counter/counterSlice";
import { fetchData } from "./redux/data/dataSlice";

import "./App.css";

function App() {
  const count = useSelector(selectCount);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const [newData, setNewData] = useState(
    useSelector((state) => state.data.data)
  );
  const data = useSelector((state) => state.data.data);
  const dataLoading = useSelector((state) => state.data.loading);
  const dataError = useSelector((state) => state.data.error);

  function doFetchData() {
    dispatch(fetchData(newData));
    setNewData("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <button disabled={loading} onClick={() => dispatch(incrementAsync())}>
          +
        </button>
        <span>{count}</span>
        <button disabled={loading} onClick={() => dispatch(decrementAsync())}>
          -
        </button>
        {loading && <p>pls standby...</p>}
        <input
          type="text"
          name="data"
          value={newData || ""}
          onChange={(e) => setNewData(e.target.value)}
        />
        <button disabled={dataLoading || !newData} onClick={doFetchData}>
          fetch data
        </button>
        {dataLoading && <p>fetching...</p>}
        {dataError && <p>{dataError}</p>}
        {data && <pre style={{textAlign: 'left', fontSize: 14}}>{JSON.stringify(data, null, 2)}</pre>}
      </header>
    </div>
  );
}

export default App;
