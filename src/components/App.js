import React from "react";
import { NewColor, Colors } from "./containers";
import "../stylesheets/_base.scss";

const App = () => (
  <div className="app">
    <NewColor />
    <Colors />
  </div>
);

export default App;
