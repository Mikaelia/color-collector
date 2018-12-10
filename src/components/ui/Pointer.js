import React from "react";

export const MyPointer = () => {
  return (
    <span
      aria-label="pointer"
      role="img"
      style={{
        transform: "translate(-50%, -2.4rem)",
        cursor: "pointer",
        fontSize: 32
      }}
    >
      ❣️
    </span>
  );
};

export const Heart = () => {
  return (
    <span role="img" style={{ fontSize: 32 }} aria-label="heart">
      ❤️
    </span>
  );
};

export default MyPointer;
