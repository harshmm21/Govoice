/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const UiIconBoldLight = ({ color = "#33383F", className }) => {
  return (
    <svg
      className={`ui-icon-bold-light ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M6 6.27273C6 4.46525 7.46525 3 9.27273 3H13C15.7614 3 18 5.23858 18 8C18 9.43071 17.3991 10.7211 16.4359 11.6325C17.9657 12.4875 19 14.123 19 16C19 18.7614 16.7614 21 14 21H9.25C7.45507 21 6 19.5449 6 17.75V6.27273ZM9.27273 5H13C14.6569 5 16 6.34315 16 8C16 9.65685 14.6569 11 13 11H8V6.27273C8 5.56982 8.56982 5 9.27273 5ZM8 13V17.75C8 18.4404 8.55964 19 9.25 19H14C15.6569 19 17 17.6569 17 16C17 14.3431 15.6569 13 14 13H8Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

UiIconBoldLight.propTypes = {
  color: PropTypes.string,
};
