/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const UiIconItalicsFilled = ({ color = "#33383F", className }) => {
  return (
    <svg
      className={`ui-icon-italics-filled ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M14.0213 3H16.5C17.0523 3 17.5 3.44772 17.5 4C17.5 4.55228 17.0523 5 16.5 5H14.7808L11.2808 19H13C13.5523 19 14 19.4477 14 20C14 20.5523 13.5523 21 13 21H10.0221C10.0079 21.0003 9.99368 21.0003 9.97943 21H7.5C6.94772 21 6.5 20.5523 6.5 20C6.5 19.4477 6.94772 19 7.5 19H9.21921L12.7192 5H11C10.4477 5 10 4.55228 10 4C10 3.44772 10.4477 3 11 3H13.9772C13.9919 2.99968 14.0065 2.99967 14.0213 3Z"
        fill={color}
      />
    </svg>
  );
};

UiIconItalicsFilled.propTypes = {
  color: PropTypes.string,
};
