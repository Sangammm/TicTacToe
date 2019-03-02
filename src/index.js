import React from "react";
import ReactDOM from "react-dom";
import Store from "./Store";
import { Provider } from "mobx-react";
import "./index.css";
import App from "./App";

const _store = new Store();
ReactDOM.render(
  <Provider store={_store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
