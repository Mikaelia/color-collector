import React from "react";
import PropTypes from "prop-types";

// default function provided to prevent error
const AddColorForm = ({ onNewColor = f => f }) => {
  let _title, _color, _colorCode;

  const submit = e => {
    e.preventDefault();
    let color;
    color = _colorCode.value ? _colorCode.value : _color.value;

    // Dispatch addColor action
    onNewColor(_title.value, color);
    _title.value = "";
    _color.value = "#000000";
    _title.focus();
  };

  return (
    <form onSubmit={submit}>
      <input
        // set using function because it is stateless,
        ref={input => (_title = input)}
        type="text"
        placeholder="color title..."
        required
      />
      <input ref={input => (_color = input)} type="color" />
      <input ref={input => (_colorCode = input)} type="text" />

      <button>ADD</button>
    </form>
  );
};

AddColorForm.propTypes = {
  onNewColor: PropTypes.func
};

export default AddColorForm;
