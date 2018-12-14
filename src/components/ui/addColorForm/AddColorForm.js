import React from "react";
import PropTypes from "prop-types";
import ColorPicker from "./ColorPicker";
import { OpenCloseButton } from "../Buttons";

// default function provided to prevent error
const AddColorForm = ({
  visibility,
  onToggleVisibility = () => console.log("hi"),
  // togglePalletDisplay = f => f,
  onNewColor = f => f
}) => {
  let _title,
    _color = { hex: "#000000" },
    _colorCode;

  const submit = e => {
    e.preventDefault();
    let color;
    // if colorcode provided, overwrite default color input
    color = _colorCode.value ? _colorCode.value : _color.hex;
    // Adds hash to hex if not provided
    color[0] !== "#" && (color = "#".concat(color));
    // Dispatch addColor action
    onNewColor(_title.value, color);
    _title.value = "";
    _color.hex = "#000000";
    _title.focus();
  };

  // Color is an object with keys:
  //{hsl, hex, rg, oldHue}
  const setNewColor = color => {
    _color = color;
  };

  return (
    <div className="color-saver">
      <section className="color-saver__color-select ">
        <h2 className="heading-md fw-light u-mt-lg u-mb-lg">Choose a Color:</h2>
        <ColorPicker setNewColor={setNewColor} />
      </section>
      <p className="heading-sm fw-light u-mb-xsm">Or enter hex...</p>
      <section className="color-saver__color-form">
        <form onSubmit={submit}>
          <input
            placeholder="#fff"
            ref={input => (_colorCode = input)}
            type="text"
          />

          <input
            // set using function because it is stateless,
            ref={input => (_title = input)}
            type="text"
            id="color-name-input"
            placeholder="Name your color"
            required
          />

          <button className="color-saver__button u-mb-md">ADD</button>
        </form>
        <OpenCloseButton
          displayOpen={visibility.paletteControls}
          openMessage="Palette Options?"
          closedMessage="Hide Palette Options"
          toggleVisibility={onToggleVisibility}
        />
      </section>
    </div>
  );
};

AddColorForm.propTypes = {
  onNewColor: PropTypes.func
};

export default AddColorForm;
