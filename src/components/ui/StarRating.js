import React from "react";
import PropTypes from "prop-types";
import Star from "./Star";

//Obtains total num of stars to display from props
const StarRating = ({ starsSelected = 0, totalStars = 5, onRate = f => f }) => (
  <div className="star-rating">
    {[...Array(totalStars)].map((n, i) => (
      <Star
        key={i}
        selected={i < starsSelected}
        //Callback called instead of setState so that this component doesn't need state
        onClick={() => onRate(i + 1)}
      />
    ))}
    <p>
      {starsSelected} of {totalStars} stars
    </p>
  </div>
);

StarRating.propTypes = {
  starsSelected: PropTypes.number,
  totalStars: PropTypes.number,
  onRate: PropTypes.func
};

export default StarRating;
