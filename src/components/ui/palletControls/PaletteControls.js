import React from "react";
import PaletteList from "./PaletteList";
import Dropdown from "./Dropdown";
import { OpenCloseButton } from "../Buttons";

const PaletteControls = ({
  palettes = [],
  colors = [],
  visibility = {},
  onToggleVisibility = f => f,
  onNewPalette = f => f,
  onAddPaletteColors = f => f,
  onSelectPalette = f => f,
  onSelectPColor = f => f,
  onRemovePaletteColors = f => f
}) => {
  let _newPaletteName;

  // Returns list of currently selected colors
  const getSelected = list => {
    return list.filter(item => item.selected);
  };

  // Creates new palette from selected colors
  const handleNewPalette = e => {
    e.preventDefault();
    const newPaletteColors = getSelected(colors);
    const newPalette = {
      name: _newPaletteName.value.toUpperCase(),
      colors: newPaletteColors
    };
    _newPaletteName = "Palette Name";
    onNewPalette(newPalette);
  };

  // Adds selected colors to existing color palette
  const handleUpdatePalette = () => {
    console.log(palettes, colors);
    console.log(getSelected(palettes));
    const newColors = getSelected(colors);
    const selectedPalette = getSelected(palettes);
    onAddPaletteColors(selectedPalette[0].id, newColors);
    console.log(selectedPalette);
    // console.log(`updating palette ${selectedPalette} with ${newColors}`);
  };

  const selectedPColors = palettes.map(pallet =>
    pallet.colors.filter(color => color.selected)
  );

  return (
    <div
      className={
        visibility.paletteControls ? "palette-controls u-mb-md" : "hidden"
      }
    >
      <div className="palette-controls__new-palette">
        <h2 className="heading-sm u-mb-sm fw-light">Create New Palette</h2>
        <form className="new-palette-form" onSubmit={handleNewPalette}>
          <input
            placeholder="Palette Name..."
            type="text"
            ref={input => (_newPaletteName = input)}
            className="palette-name u-mb-sm"
          />
          <button className="palette-controls__button u-mb-hg">Submit</button>
        </form>
      </div>
      <div className="palette-controls__update-palette">
        <h2 className="heading-sm fw-light u-mb-sm">
          Add Color(s) to Saved Pallet
        </h2>

        <Dropdown
          title="My Palettes"
          onSelectPalette={id => {
            console.log(id);
            onSelectPalette(id);
          }}
          palettes={palettes}
        />
        <button
          className="palette-controls__button u-mt-sm u-mb-md"
          onClick={(palette, colors) => handleUpdatePalette(palette, colors)}
        >
          Update Palette
        </button>
        <OpenCloseButton
          displayOpen={visibility.palettes}
          openMessage="View Saved Palettes"
          closedMessage="Close Palette View"
          toggleVisibility={onToggleVisibility}
        />
      </div>

      <div
        className={
          visibility.palettes
            ? "palette-controls__palette-gallery u-mt-md u-mb-md"
            : "hidden"
        }
      >
        <PaletteList palettes={palettes} onSelectPColor={onSelectPColor} />
      </div>
      {selectedPColors.length > 1 && visibility.palettes ? (
        <button
          className="remove-PColor-button"
          onClick={onRemovePaletteColors}
        >
          Remove Colors from Palette?
        </button>
      ) : null}
    </div>
  );
};

export default PaletteControls;
