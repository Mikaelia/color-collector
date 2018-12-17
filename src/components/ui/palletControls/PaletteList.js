import React from "react";
import Palette from "./Palette";

const PaletteList = ({
  palettes = [],
  onSelectPColor = f => f,
  onRemovePalette = f => f
}) => {
  return (
    <div className="palette-view__container">
      {palettes.length === 0 ? (
        <p className="palette-view__empty-message">
          No Palettes Saved. Get collecting!
        </p>
      ) : (
        palettes.map(palette =>
          palette.colors.length !== 0 ? (
            <Palette
              onRemovePalette={() => onRemovePalette(palette.id)}
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
