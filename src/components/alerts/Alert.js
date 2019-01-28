import React, { Component } from "react";
import { ErrorFace, SuccessThumb, WelcomeWave } from "./AlertIcons";

// This component will be rendered by the container app component and then will dispatch
// an action to remove itself after a second.

class Alert extends Component {
  componentDidMount() {
    const { removeAlert, alert } = this.props;
    setTimeout(() => {
      removeAlert(alert.id);
    }, 5000);
  }

  render() {
    const { id, style, alert } = this.props;
    console.log(id, style, alert);
    return (
      <div className="alert-container">
        <div className={"alert " + style} style={{ style }}>
          {alert.text}
        </div>
        {style === "alert--success" ? (
          <SuccessThumb />
        ) : style === "alert--error" ? (
          <ErrorFace />
        ) : (
          <WelcomeWave />
        )}
      </div>
    );
  }
}

export default Alert;
