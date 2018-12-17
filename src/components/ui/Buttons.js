import React, { Component } from "react";

export const OpenCloseButton = ({
  id,
  displayOpen,
  openMessage = "",
  closedMessage = "",
  toggleVisibility = f => f
}) => {
  return (
    <button
      onClick={() => {
        console.log(displayOpen);
        toggleVisibility();
      }}
      id={id}
      className={
        displayOpen ? "text-button text-button--content-open" : "text-button"
      }
    >
      {displayOpen ? closedMessage : openMessage}
    </button>
  );
};

export const RemoveButton = ({ fill }) => (
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

/// ---> Scroll to Specified Element Button
/*
This button takes children, scrollTargetMessage, scrollTargetElement as props.
It will return a conditionally styled button with a message on hover telling user where they 
will be directed.

It will take a component with a variable onClick function as a child. In this app,
various SVG Icon direction-indicating components are used
*/
export class ScrollButton extends Component {
  scrollMe = element =>
    document.querySelector(element).scrollIntoView({
      behavior: "smooth"
    });
  render() {
    const {
      children = {},
      scrollTargetMessage = "",
      scrollTargetElement = ""
    } = this.props;
    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, {
        onClick: () => this.scrollMe(scrollTargetElement),
        className: "scroll-button__icon"
      })
    );
    return (
      <div className="scroll-button">
        <span className="scroll-button__heading">To</span>
        {childrenWithProps}
        <span className="scroll-button__heading">{scrollTargetMessage}</span>
      </div>
    );
  }
}
