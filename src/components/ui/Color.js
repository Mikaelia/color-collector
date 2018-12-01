import React, { Component } from "react";
import StarRating from "./StarRating";
import PropTypes from "prop-types";
import "../../stylesheets/_color.scss";

class Color extends Component {
  render() {
    const { title, rating, color, onRate, onRemove } = this.props;
    return (
      <section className="color" style={this.style}>
        <h1 ref="title">{title}</h1>
        <button ref="btn" onClick={onRemove}>
          X
        </button>
        <div className="color" style={{ backgroundColor: color }} />
        <StarRating starsSelected={rating} onRate={onRate} />
      </section>
    );
  }
}

Color.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rating: PropTypes.number,
  onRemove: PropTypes.func,
  onRate: PropTypes.func
};

Color.defaultProps = {
  rating: 0,
  onRemove: f => f,
  onRate: f => f
};

export default Color;
