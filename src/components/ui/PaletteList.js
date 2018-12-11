import React from "react";
import Palette from "./Palette";

const PaletteList = ({ palettes = [] }) => (
  <div>
    {palettes.length === 0 ? (
      <p>No Palettes Saved. Get collecting!</p>
    ) : (
      palettes.map(palette => <Palette key={palette.name} {...palette} />)
    )}
  </div>
);

export default PaletteList;
