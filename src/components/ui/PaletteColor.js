import React from "react";

export default function PaletteColor({ color }) {
  return (
    <div className="palette-color__container">
      <div
        className="palette-color__colorbox"
        style={{
          background: `${color.color}`
        }}
      >
        <div className="palette-color__info-block">
          <p>{color.color}</p>
        </div>
      </div>
    </div>
  );
}
