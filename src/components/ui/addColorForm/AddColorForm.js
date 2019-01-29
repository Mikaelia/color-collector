import React from "react";
import PropTypes from "prop-types";
import ColorPicker from "./ColorPicker";
import { OpenCloseButton } from "../Buttons";

const AddColorForm = ({ onNewColor = f => f, addAlert = f => f }) => {
  let _title,
    _color = { hex: "#000000" },
    _colorCode;

  const checkEmptyInput = (value, message) => {
    if (value === "") {
      addAlert(message, "alert--error");
      return true;
    }
  };

  const validateInput = () => {
    let color;
    if (!checkEmptyInput(_title.value, "Please Provide Color Name")) {
      // If hex provided, overwrite default color input
      color = _colorCode.value ? _colorCode.value : _color.hex;
      // Prepends hash to hex if not provided
      color[0] !== "#" && (color = "#".concat(color));
      return color;
    }
  };

  const colorFormSubmit = e => {
    e.preventDefault();
    const color = validateInput();
    if (color) {
      onNewColor(_title.value, color);
      addAlert("Color Submitted!", "alert--success");
      _title.value = "";
      _color.hex = "#000000";
      _title.focus();
    }
  };

  // Color is an object with keys:
  //{hsl, hex, rg, oldHue}
  const setNewColor = color => {
    _color = color;
  };

  return (
    <div className="color-saver">
      <section className="color-saver__color-select ">
        <h2
          className="heading--md fw-light u-mt-lg u-mb-lg"
          style={{ textTransform: "uppercase" }}
        >
          1. Choose a Color
        </h2>
        <ColorPicker setNewColor={setNewColor} />
      </section>
      <p className="heading--sm fw-light u-mb-lg">Or enter hex:</p>
      <section className="color-saver__color-form">
        <form onSubmit={colorFormSubmit}>
          <input
            placeholder="#fff"
            ref={input => (_colorCode = input)}
            type="text"
          />
          <p className="heading--sm fw-light u-mb-lg u-mt-lg">
            2. Name your color
          </p>
          <input
            // set using function because it is stateless,
            ref={input => (_title = input)}
            type="text"
            id="color-name-input"
            placeholder="Color Name"
          />

          <button className="color-saver__button u-mb-md">ADD</button>
        </form>
      </section>
    </div>
  );
};

AddColorForm.propTypes = {
  onNewColor: PropTypes.func
};

export default AddColorForm;
