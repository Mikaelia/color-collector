import React, { Component } from "react";
import { NewColor, Colors, Palettes } from "./containers";
import "../stylesheets/main.scss";

class App extends Component {
  state = {
    display: true
  };

  handleToggle = () => {
    const { display } = this.state;
    this.setState({ display: !display });
    console.log({ display });
  };

  render() {
    const { display } = this.state;
    return (
      <div className="app">
        <NewColor togglePalletDisplay={this.handleToggle} />
        <Palettes showControls={display} />
        <Colors />
      </div>
    );
  }
}
export default App;
