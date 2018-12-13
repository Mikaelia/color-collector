import React from "react";
import Palette from "./Palette";

const PaletteList = ({ palettes = [], onSelectPColor }) => (
  <div className="palette-view__container">
    <h2 className="heading-sm fw-med">Your Palettes</h2>
    {palettes.length === 0 ? (
      <p className="palette-view__empty-message">
        No Palettes Saved. Get collecting!
      </p>
    ) : (
      palettes.map(palette => (
        <Palette
          key={palette.id}
          {...palette}
          onSelect={cid => {
            console.log(palette.id, cid);
            onSelectPColor(palette.id, cid);
          }}
        />
      ))
    )}
  </div>
);

export default PaletteList;