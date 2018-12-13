import React from "react";

export default function PaletteColor({ color, onSelect = f => f }) {
  return (
    <div
      className={
        "palette-color__container" + (color.selected ? " color-selected" : "")
      }
      onClick={onSelect}
    >
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
