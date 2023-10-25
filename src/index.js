import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import counterReducer from "../src/redux/counter/counterSlice";
import { watchIncrementAsync, watchDecrementAsync } from "../src/redux/counter/sagas";
import dataReducer from './redux/data/dataSlice';
import { watchFetchData } from './redux/data/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    counter: counterReducer,
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchIncrementAsync);
sagaMiddleware.run(watchDecrementAsync);
sagaMiddleware.run(watchFetchData);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
