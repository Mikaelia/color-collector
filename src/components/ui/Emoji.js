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

export const Heart = ({ className }) => {
  return (
    <span className={className} role="img" aria-label="heart">
      ❤️
    </span>
  );
};

export default MyPointer;
