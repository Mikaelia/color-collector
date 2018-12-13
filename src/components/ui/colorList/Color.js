import React from "react";
import StarRating from "../StarRating";
import { RemoveButton } from "../Buttons";
import PropTypes from "prop-types";

const Color = ({
  selected = false,
  title,
  rating = 0,
  color,
  onRate = f => f,
  onRemove = f => f,
  toggleSelect = f => f
}) => (
  <section className={"color-card" + (selected ? " color-selected" : "")}>
    <div className="color-card__buttons-box u-mt-xsm">
      <div className="checkbox-container">
        <input
          type="checkbox"
          id={`styled-checkbox--${title}`}
          className="styled-checkbox"
          checked={selected ? "checked" : false}
          onChange={toggleSelect}
        />
        <label htmlFor={`styled-checkbox--${title}`} />
      </div>
      <button className="color-card__btn-remove" onClick={onRemove}>
        <RemoveButton />
      </button>
    </div>
    <h1 className="heading heading-sm fw-med u-mt-md">{title}</h1>
    <div className="color-card__color" style={{ backgroundColor: color }}>
      <span>{color}</span>
    </div>
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
