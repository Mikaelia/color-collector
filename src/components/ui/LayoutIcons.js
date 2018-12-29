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
      fill="white"
      d="M9.854 19.354l6-6c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-5.146 5.146v-16.293c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v16.293l-5.146-5.146c-0.195-0.195-0.512-0.195-0.707 0-0.098 0.098-0.146 0.226-0.146 0.354s0.049 0.256 0.146 0.354l6 6c0.195 0.195 0.512 0.195 0.707 0z"
    />
  </svg>
);

export const ChevronDown = ({ className, onClick }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    aria-labelledby="title"
    onClick={onClick}
  >
    <title>Chevron Down</title>
    <path
      fill="#000000"
      d="M0 6c0-0.128 0.049-0.256 0.146-0.354 0.195-0.195 0.512-0.195 0.707 0l8.646 8.646 8.646-8.646c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-9 9c-0.195 0.195-0.512 0.195-0.707 0l-9-9c-0.098-0.098-0.146-0.226-0.146-0.354z"
    />
  </svg>
);

export const ChevronUp = ({ className, onClick }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    aria-labelledby="title"
    onClick={onClick}
  >
    <title>Chevron Up</title>
    <path
      fill="#000000"
      d="M0 15c0 0.128 0.049 0.256 0.146 0.354 0.195 0.195 0.512 0.195 0.707 0l8.646-8.646 8.646 8.646c0.195 0.195 0.512 0.195 0.707 0s0.195-0.512 0-0.707l-9-9c-0.195-0.195-0.512-0.195-0.707 0l-9 9c-0.098 0.098-0.146 0.226-0.146 0.354z"
    />
  </svg>
);

export const Cross = ({ style }) => (
  <svg
    className="remove-button"
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="2 2 15 15"
    aria-labelledby="title"
    style={style}
  >
    <title id="title">Remove Icon</title>
    <path
      className="cross"
      d="M10.707 10.5l5.646-5.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-5.646 5.646-5.646-5.646c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l5.646 5.646-5.646 5.646c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l5.646-5.646 5.646 5.646c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-5.646-5.646z"
    />
  </svg>
);
