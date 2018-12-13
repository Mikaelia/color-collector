import React from "react";
import Header from "./ui/Header";
// import Footer from "./Footer";
import { NewColor, Colors, Palettes } from "./containers";
import "../stylesheets/main.scss";

const App = () => (
  <div className="app">
    <Header />
    <NewColor />
    <Palettes />
    <Colors />
  </div>
);

export default App;
