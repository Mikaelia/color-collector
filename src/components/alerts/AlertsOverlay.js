import React from "react";
import Alert from "./Alert";
// Alerts comes from mapped state.
// After alert rendered, set timeout for remove alert?
// On alert component did mount -> set timeout
const AlertsOverlayComponent = ({
  alerts = [],
  children,
  style,
  removeAlert = f => f
}) => {
  const renderAlerts = () =>
    alerts.map(alert => (
      <Alert
        alert={alert}
        key={alert.id}
        style={alert.style}
        removeAlert={removeAlert}
      />
    ));
  return (
    <div className="react-alerts-overlay-component-container">
      {alerts ? renderAlerts() : null}
    </div>
  );
};

export default AlertsOverlayComponent;
