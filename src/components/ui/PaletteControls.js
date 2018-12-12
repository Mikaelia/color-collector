import React from "react";
import PaletteList from "./PaletteList";
import Dropdown from "./Dropdown";

const PaletteControls = ({
  showPalletOptions = false,
  showPalletGallery = false,
  newPalette = {},
  palettes = [],
  colors = [],
  togglePalletGallery = f => f,
  onNewPalette = f => f,
  onAddPaletteColors = f => f,
  onSelectPalette = f => f
}) => {
  let _newPaletteName;

  // Returns list of currently selected colors
  const getSelected = list => {
    return list.reduce((selectedItems, item) => {
      return item.selected ? selectedItems.concat(item) : selectedItems;
    }, []);
  };

  // Creates new palette from selected colors
  const handleNewPalette = e => {
    e.preventDefault();
    const newPaletteColors = getSelected(colors);
    const newPalette = {
      name: _newPaletteName.value,
      colors: newPaletteColors
    };
    _newPaletteName = "Palette Name";
    onNewPalette(newPalette);
  };

  // const handlePaletteSelect = paletteID => {
  //   _selectedPaletteID = paletteID;
  // };

  // Adds currently selected colors to existing color palette
  const handleUpdatePalette = () => {
    console.log(getSelected(palettes));
    const newColors = getSelected(colors);
    const selectedPalette = getSelected(palettes);
    onAddPaletteColors(selectedPalette[0].id, newColors);
    console.log(selectedPalette);
    // console.log(`updating palette ${selectedPalette} with ${newColors}`);
  };

  console.log({ showPalletOptions });
  return (
    <div className={showPalletOptions ? "palette-controls u-mb-md" : "hidden"}>
      <div className="palette-controls__new-palette">
        <h2 className="heading-sm u-mb-sm fw-med">Create New Palette</h2>
        <form className="new-palette-form" onSubmit={handleNewPalette}>
          <input
            placeholder="Palette Name"
            type="text"
            ref={input => (_newPaletteName = input)}
            className="palette-name u-mb-sm"
          />
          <button className="palette-controls__button u-mb-hg">Submit</button>
        </form>
      </div>
      <div className="palette-controls__update-palette">
        <h2 className="heading-sm fw-med u-mb-sm">
          Add Color(s) to Saved Pallet
        </h2>

        <Dropdown
          title="My Palettes"
          onSelectPalette={id => onSelectPalette(id)}
          palettes={palettes}
        />
        <button
          className="palette-controls__button u-mt-sm u-mb-md"
          onClick={(palette, colors) => handleUpdatePalette(palette, colors)}
        >
          Update Palette
        </button>
        <button
          onClick={togglePalletGallery}
          className="palette-view__display-button text-button u-mb-md"
        >
          View Saved Palettes
        </button>
      </div>

      <div
        className={
          showPalletGallery
            ? "palette-controls__palette-gallery u-mb-md"
            : "hidden"
        }
      >
        <PaletteList palettes={palettes} />
      </div>
    </div>
  );
};

export default PaletteControls;
