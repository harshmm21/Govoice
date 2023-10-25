/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const UiIcon16Down12 = ({ color = "#6F767E", className }) => {
  return (
    <svg
      className={`ui-icon-16-down-12 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M13 9L8 14L3 9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path className="path" d="M8 2L8 14" stroke={color} strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
};

UiIcon16Down12.propTypes = {
  color: PropTypes.string,
};
