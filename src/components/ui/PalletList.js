import React from "react";
import Pallet from "./Pallet";

const PalletList = ({ pallets = [] }) => (
  <div>
    {pallets.length === 0 ? (
      <p>No Pallets Saved. Get collecting!</p>
    ) : (
      pallets.map(pallet => <Pallet key={pallet.name} {...pallet} />)
    )}
  </div>
);

export default PalletList;
