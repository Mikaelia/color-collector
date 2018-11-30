import React from "react";
import PropTypes from "prop-types";

// default function provided to prevent error
const AddColorForm = ({ onNewColor = f => f }) => {
  let _title, _color;

  const submit = e => {
    e.preventDefault();
    //Calling within callback
    onNewColor(_title.value, _color.value);
    _title.value = "";
    _color.value = "#000000";
    _title.focus();
  };

  return (
    <form onSubmit={submit}>
      <input
        // set using function because it is stateless,
        // refs used to capture these 2 values
        ref={input => (_title = input)}
        type="text"
        placeholder="color title..."
        required
      />
      <input ref={input => (_color = input)} type="color" required />

      <button>ADD</button>
    </form>
  );
};

AddColorForm.propTypes = {
  onNewColor: PropTypes.func
};

export default AddColorForm;
