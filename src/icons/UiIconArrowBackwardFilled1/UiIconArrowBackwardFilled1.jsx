/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const UiIconArrowBackwardFilled1 = ({ color = "#9A9FA5", className }) => {
  return (
    <svg
      className={`ui-icon-arrow-backward-filled-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10.7071 17.7929C11.0976 18.1834 11.0976 18.8166 10.7071 19.2071C10.3166 19.5976 9.68342 19.5976 9.29289 19.2071L3.5 13.4142C2.71895 12.6332 2.71895 11.3668 3.5 10.5858L9.29289 4.79289C9.68342 4.40237 10.3166 4.40237 10.7071 4.79289C11.0976 5.18342 11.0976 5.81658 10.7071 6.20711L5.91421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H5.91421L10.7071 17.7929Z"
        fill={color}
      />
    </svg>
  );
};

UiIconArrowBackwardFilled1.propTypes = {
  color: PropTypes.string,
};
