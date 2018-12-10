import React from "react";

const Pallet = ({ name, colors }) => (
  <div className="pallet">
    <h3 className="pallet__color-list">{name}</h3>
    {colors.map(color => (
      <div className="pallet-container">
        <li key={color.id}>{color.title}</li>
        <div
          style={{
            height: "2rem",
            width: "2rem",
            background: `${color.color}`
          }}
        />
      </div>
    ))}
  </div>
);

export default Pallet;
