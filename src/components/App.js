import React from "react";
import { NewColor, Colors, Palettes } from "./containers";
import "../stylesheets/main.scss";

const App = () => (
  <div className="app">
    <NewColor />
    <Palettes />
    <Colors />
  </div>
);

export default App;
