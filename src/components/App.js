import React, { Component } from "react";
import { NewColor, Colors, Palettes } from "./containers";
import "../stylesheets/main.scss";

class App extends Component {
  state = {
    showPalletOptions: true,
    showPalletGallery: false
  };

  handleToggle = (toggleView = "") => {
    const { showPalletOptions, showPalletGallery } = this.state;
    let newState =
      toggleView === "palette-control"
        ? { showPalletOptions: !showPalletOptions }
        : { showPalletGallery: !showPalletGallery };

    this.setState(newState);
  };

  render() {
    const { showPalletOptions, showPalletGallery } = this.state;
    return (
      <div className="app">
        <NewColor
          togglePalletDisplay={toggleView => this.handleToggle(toggleView)}
        />
        <Palettes
          togglePalletGallery={this.handleToggle}
          showPalletOptions={showPalletOptions}
          showPalletGallery={showPalletGallery}
        />
        <Colors />
      </div>
    );
  }
}
export default App;
