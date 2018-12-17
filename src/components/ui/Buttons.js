import React, { Component } from "react";
import { Cross } from "./LayoutIcons";

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

export const RemoveButton = ({ className, onClick, style = {} }) => (
  <button className={className} onClick={onClick}>
    <Cross style={style} />
  </button>
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
