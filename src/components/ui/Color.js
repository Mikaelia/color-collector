import React from "react";
import StarRating from "./StarRating";
import PropTypes from "prop-types";

const Color = ({
  title,
  rating = 0,
  color,
  onRate = f => f,
  onRemove = f => f
}) => (
  <section className="color-card">
    <h1 className="heading heading-md light">{title}</h1>
    <div className="color-card__btn-container">
      <button className="color-card__btn-remove" onClick={onRemove}>
        &times;
      </button>
    </div>
    <div className="color-card__color" style={{ backgroundColor: color }} />
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
