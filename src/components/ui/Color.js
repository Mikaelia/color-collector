import React from "react";
import StarRating from "./StarRating";
import PropTypes from "prop-types";

const Color = ({
  selected = false,
  title,
  rating = 0,
  color,
  onRate = f => f,
  onRemove = f => f,
  toggleSelect = f => f
}) => {
  //Call toggle action and
  const onClick = () => toggleSelect;

  return (
    <section className={"color-card" + (selected ? " selected" : "")}>
      <input
        type="checkbox"
        label="color-select"
        className="color-card__select"
        checked={selected ? "checked" : false}
        onClick={toggleSelect}
      />
      <div className="color-card__btn-container">
        <button className="color-card__btn-remove" onClick={onRemove}>
          &times;
        </button>
      </div>
      <h1 className="heading heading-md light u-mt-sm">{title}</h1>
      <div className="color-card__color" style={{ backgroundColor: color }} />
      <StarRating starsSelected={rating} onRate={onRate} />
    </section>
  );
};

Color.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rating: PropTypes.number,
  onRemove: PropTypes.func,
  onRate: PropTypes.func
};

export default Color;
