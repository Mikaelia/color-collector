import React from "react";

const Pallet = ({ name, colors }) => (
  <div className="palette__container">
    <h3 className="palette__name ">{name}</h3>
    <div className="palette__colors-container">
      {colors.map(color => (
        <div key={`p-${color.id}`} className="palette-color__container">
          <li className="palette-color__name" key={color.id}>
            {color.title}
          </li>
          <div
            className="palette-color__colorbox"
            key={`c-${color.id}`}
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
