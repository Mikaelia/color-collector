import React from "react";
import { v4 } from "uuid";

const Pallet = ({ name, colors }) => (
  <div className="palette__container">
    <h3 className="palette__name u-mt-md">{name}</h3>
    <div className="palette__colors-container">
      {colors.map(color => (
        <div key={v4()} className="palette-color__container">
          <li className="palette-color__name" key={v4()}>
            {color.title}
          </li>
          <div
            className="palette-color__colorbox"
            key={v4()}
            style={{
              background: `${color.color}`
            }}
          />
        </div>
      ))}
    </div>
  </div>
);

export default Pallet;
