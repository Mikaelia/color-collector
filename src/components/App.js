import React, { Component } from "react";
import { NewColor, Colors, Palettes } from "./containers";
import "../stylesheets/main.scss";

class App extends Component {
  state = {
    displayOpen: true,
    showPalletOptions: true,
    showPalletGallery: true
  };

  handleToggle = (toggleView = "") => {
    const { showPalletOptions, showPalletGallery, displayOpen } = this.state;
    let newState =
      toggleView === "palette-control"
        ? { showPalletOptions: !showPalletOptions, displayOpen: !displayOpen }
        : { showPalletGallery: !showPalletGallery };

    this.setState(newState);
  };

  render() {
    const { showPalletOptions, showPalletGallery, displayOpen } = this.state;
    return (
      <div className="app">
        <NewColor
          displayOpen={displayOpen}
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
