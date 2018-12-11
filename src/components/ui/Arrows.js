import React from "react";

export const ArrowUp = ({ fill }) => (
  <svg
    className="arrow arrow-up"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    aria-labelledby="title"
  >
    <title id="title">Arrow Up</title>
    <path
      fill="#000000"
      d="M9.146 0.646l-6 6c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l5.146-5.146v16.293c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-16.293l5.146 5.146c0.195 0.195 0.512 0.195 0.707 0 0.098-0.098 0.146-0.226 0.146-0.354s-0.049-0.256-0.146-0.354l-6-6c-0.195-0.195-0.512-0.195-0.707 0z"
    />
  </svg>
);
export const ArrowDown = ({ fill, className }) => (
  <svg
    className={`arrow arrow-down + ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    aria-labelledby="title"
  >
    <title id="title">Arrow Down</title>
    <path
      fill="#000000"
      d="M9.854 19.354l6-6c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-5.146 5.146v-16.293c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v16.293l-5.146-5.146c-0.195-0.195-0.512-0.195-0.707 0-0.098 0.098-0.146 0.226-0.146 0.354s0.049 0.256 0.146 0.354l6 6c0.195 0.195 0.512 0.195 0.707 0z"
    />
  </svg>
);
