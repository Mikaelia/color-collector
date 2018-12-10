import React from "react";
import { SliderPicker } from "react-color";
// import CustomPointer from "./Pointer";

const ColorPicker = ({ setNewColor }) => {
  const handleChangeComplete = color => {
    console.log(color);
    setNewColor(color);
  };
  return (
    <div className="color-picker">
      <SliderPicker
        //pointer={CustomPointer}
        onChangeComplete={handleChangeComplete}
      />
    </div>
  );
};

export default ColorPicker;
