import React from "react";
import { v4 } from "uuid";
import PaletteColor from "./PaletteColor";

const Pallet = ({ name, colors, onSelect = f => f }) => (
  <div className="palette__container">
    <h3 className="palette__name u-mb-xsm">{name}</h3>
    <div className="palette__colors-container">
      {colors.map(color => (
        <PaletteColor
          key={v4()}
          color={color}
          onSelect={() => onSelect(color.id)}
        />
      ))}
    </div>
  </div>
);

export default Pallet;
