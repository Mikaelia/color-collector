import React from "react";
import { NewColor, Colors, Pallets } from "./containers";
import "../stylesheets/main.scss";

const App = () => (
  <div className="app">
    <Pallets />
    <NewColor />
    <Colors />
  </div>
);

export default App;
