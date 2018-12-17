import React from "react";
import PropTypes from "prop-types";
import Color from "./Color";
import { ScrollButton } from "../Buttons";
import { ChevronUp, ChevronDown } from "../LayoutIcons";

const ColorList = ({
  colors = [],
  onRate = f => f,
  onRemove = f => f,
  onSelect = f => f
}) => (
  <div className="color-list">
    <div className="color-list__scroll-button-container--top">
      <ScrollButton
        scrollTargetElement=".color-saver"
        scrollTargetMessage="Top"
      >
        <ChevronUp />
      </ScrollButton>
      <ScrollButton
        scrollTargetElement=".color-list:last-child"
        scrollTargetMessage="Bottom"
      >
        <ChevronDown />
      </ScrollButton>
    </div>
    <div className="color-list__scroll-button-container--bottom">
      <ScrollButton
        scrollTargetElement=".color-saver"
        scrollTargetMessage="Top"
      >
        <ChevronUp />
      </ScrollButton>
    </div>
    {colors.length === 0 ? (
      <p>No Colors Listed. (Add a Color)</p>
    ) : (
      colors.map(color => (
        <Color
          key={color.id}
          {...color}
          onRate={rating => onRate(color.id, rating)}
          onRemove={() => onRemove(color.id)}
          toggleSelect={() => onSelect(color.id)}
        />
      ))
    )}
  </div>
);

ColorList.propTypes = {
  colors: PropTypes.array,
  onRate: PropTypes.func,
  onRemove: PropTypes.func
};

export default ColorList;
