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
    // if colorcode, replace color
    color = _colorCode.value ? _colorCode.value : _color.hex;

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
    <div className="color-saver u-mb-md">
      <button
        onClick={() => {
          console.log("clicked!");
          onToggleVisibility();
        }}
      />
      <section className="color-saver__color-select">
        <h2 className="heading-md fw-light u-mb-sm">Choose a Color:</h2>
        <ColorPicker setNewColor={setNewColor} />
      </section>
      <p className="heading-xsm u-mb-xsm">Or enter hex...</p>
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
            placeholder="color name..."
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
