import React from "react";
import { NewColor, Colors, Palettes, Alerts } from "./containers";

import "../stylesheets/main.scss";

const App = () => (
  <div className="app">
    <Alerts />
    <NewColor />
    <Palettes />
    <Colors />
  </div>
);

export default App;
