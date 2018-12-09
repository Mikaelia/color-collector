import React from "react";

const RemoveButton = ({ fill }) => (
  <svg
    className="remove-button"
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="2 2 15 15"
    aria-labelledby="title"
  >
    <title id="title">Remove Icon</title>
    <path
      className="cross"
      d="M10.707 10.5l5.646-5.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-5.646 5.646-5.646-5.646c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l5.646 5.646-5.646 5.646c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l5.646-5.646 5.646 5.646c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-5.646-5.646z"
    />
  </svg>
);

export default RemoveButton;
