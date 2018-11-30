import React from "react";
import PropTypes from "prop-types";

//Will let parent know it has been clicked
const Star = ({ selected = false, onClick = f => f }) => (
  <div className={selected ? "star selected" : "star"} onClick={onClick} />
);

Star.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

export default Star;
