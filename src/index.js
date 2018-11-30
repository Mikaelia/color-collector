import React from "react";
import ReactDOM, { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import storeFactory from "./store";

import App from "./components/App";

import "./index.css";

const store = storeFactory();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
