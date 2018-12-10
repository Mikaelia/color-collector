import React from "react";
import PalletList from "./PalletList";
import Dropdown from "./Dropdown";

const PalletControls = ({
  newPallet = {},
  pallets = [],
  colors = [],
  onNewPallet = f => f,
  onAddPalletColors = f => f
}) => {
  let _name;

  // Returns list of currently selected colors
  const getSelectedColors = colors => {
    return colors.reduce((pallet, color) => {
      return color.selected ? pallet.concat(color) : pallet;
    }, []);
  };

  // Adds new pallet
  const handleNewPallet = e => {
    e.preventDefault();
    const newPalletColors = getSelectedColors(colors);
    const newPallet = { name: _name.value, colors: newPalletColors };
    onNewPallet(newPallet);
  };

  const handleUpdatePallet = () => {
    //get ref from dropdown to get selected palletName
    //TODO: make dropdown which fills with pallet names
    // const newPallet = getSelectedColors(colors);
    // onAddPalletColors(name, newPallet)
  };

  return (
    <div className="pallet-list">
      <form onSubmit={handleNewPallet}>
        <label>
          <input
            type="text"
            ref={input => (_name = input)}
            className="pallet-name"
          />
        </label>
        <button
          style={{
            height: "2rem",
            width: "2rem",
            margin: "2rem",
            padding: "2rem"
          }}
        >
          Add New Pallet
        </button>
      </form>
      <button
        style={{
          height: "2rem",
          width: "2rem",
          margin: "2rem",
          padding: "2rem"
        }}
        onSubmit={(pallet, colors) => handleUpdatePallet(pallet, colors)}
      >
        Update Pallet
      </button>
      <Dropdown title="My Pallets" pallets={pallets} />
      {/* this will cause dropdown of palletnames */}
      <PalletList pallets={pallets} />
    </div>
    //link to PalletList
  );
};

export default PalletControls;
