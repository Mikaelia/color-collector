import React from "react";
import { NewColor, Colors, Palettes, Alerts } from "./containers";

import "../sass/main.scss";

const App = () => (
  <div className="app">
    <Alerts />
    <NewColor />
    <Colors />
    <Palettes />
  </div>
);

export default App;
