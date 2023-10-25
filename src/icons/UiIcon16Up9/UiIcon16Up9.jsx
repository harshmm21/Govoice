/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const UiIcon16Up9 = ({ color = "#83BF6E", className }) => {
  return (
    <svg
      className={`ui-icon-16-up-9 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 17 16"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M3.5 7L8.5 2L13.5 7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path className="path" d="M8.5 14V2" stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
};

UiIcon16Up9.propTypes = {
  color: PropTypes.string,
};
