import React, { Component } from "react";
import StarRating from "./StarRating";
import PropTypes from "prop-types";
import "../../stylesheets/_color.scss";

const Color = ({
  title,
  rating = 0,
  color,
  onRate = f => f,
  onRemove = f => f
}) => (
  <section className="color">
    <h1>{title}</h1>
    <button onClick={onRemove}>X</button>
    <div className="color" style={{ backgroundColor: color }} />
    <StarRating starsSelected={rating} onRate={onRate} />
  </section>
);

Color.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rating: PropTypes.number,
  onRemove: PropTypes.func,
  onRate: PropTypes.func
};

export default Color;
