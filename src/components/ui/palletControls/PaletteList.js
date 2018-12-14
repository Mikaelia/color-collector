import React from "react";
import Palette from "./Palette";

const PaletteList = ({ palettes = [], onSelectPColor }) => {
  return (
    <div className="palette-view__container">
      <h2
        className="palette-view__heading fw-light u-mb-hg"
        style={{ color: {} }}
      >
        Your Palettes
      </h2>
      {palettes.length === 0 ? (
        <p className="palette-view__empty-message">
          No Palettes Saved. Get collecting!
        </p>
      ) : (
        palettes.map(palette =>
          palette.colors.length !== 0 ? (
            <Palette
              key={palette.id}
              {...palette}
              onSelect={cid => {
                onSelectPColor(palette.id, cid);
              }}
            />
          ) : null
        )
      )}
    </div>
  );
};

export default PaletteList;
