/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const UiIconCloseLight = ({ color = "#33383F", className }) => {
  return (
    <svg
      className={`ui-icon-close-light ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M5.5886 4.4107C5.26317 4.08527 4.73553 4.08527 4.41009 4.4107C4.08466 4.73614 4.08466 5.26378 4.41009 5.58921L8.82085 9.99997L4.41012 14.4107C4.08468 14.7361 4.08468 15.2638 4.41012 15.5892C4.73555 15.9147 5.26319 15.9147 5.58863 15.5892L9.99936 11.1785L14.4101 15.5892C14.7355 15.9147 15.2632 15.9147 15.5886 15.5892C15.914 15.2638 15.914 14.7361 15.5886 14.4107L11.1779 9.99997L15.5886 5.58922C15.9141 5.26378 15.9141 4.73614 15.5886 4.4107C15.2632 4.08527 14.7356 4.08527 14.4101 4.4107L9.99936 8.82146L5.5886 4.4107Z"
        fill={color}
      />
    </svg>
  );
};

UiIconCloseLight.propTypes = {
  color: PropTypes.string,
};
