import React from "react";
import PropTypes from "prop-types";
import Color from "./Color";
import "../../stylesheets/_colorlist.scss";

const ColorList = ({ colors = [], onRate = f => f, onRemove = f => f }) => (
  <div className="color-list">
    {colors.length === 0 ? (
      <p>No Colors Listed. (Add a Color)</p>
    ) : (
      colors.map(color => (
        <Color
          key={color.id}
          //shorthand to get all props into Color
          {...color}
          //Seems you can only call function in app within callback
          onRate={rating => onRate(color.id, rating)}
          onRemove={() => onRemove(color.id)}
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
