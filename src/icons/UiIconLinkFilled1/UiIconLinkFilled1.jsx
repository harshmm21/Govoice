/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const UiIconLinkFilled1 = ({ color = "#6F767E", className }) => {
  return (
    <svg
      className={`ui-icon-link-filled-1 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M1.66663 10.0002C1.66663 7.69898 3.53211 5.8335 5.83329 5.8335H8.33329C8.79353 5.8335 9.16663 6.20659 9.16663 6.66683C9.16663 7.12707 8.79353 7.50016 8.33329 7.50016H5.83329C4.45258 7.50016 3.33329 8.61945 3.33329 10.0002C3.33329 11.3809 4.45258 12.5002 5.83329 12.5002H8.33329C8.79353 12.5002 9.16663 12.8733 9.16663 13.3335C9.16663 13.7937 8.79353 14.1668 8.33329 14.1668H5.83329C3.53211 14.1668 1.66663 12.3013 1.66663 10.0002Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M10.8334 6.66683C10.8334 6.20659 11.2065 5.8335 11.6667 5.8335H14.1667C16.4679 5.8335 18.3334 7.69898 18.3334 10.0002C18.3334 12.3013 16.4679 14.1668 14.1667 14.1668H11.6667C11.2065 14.1668 10.8334 13.7937 10.8334 13.3335C10.8334 12.8733 11.2065 12.5002 11.6667 12.5002H14.1667C15.5474 12.5002 16.6667 11.3809 16.6667 10.0002C16.6667 8.61945 15.5474 7.50016 14.1667 7.50016H11.6667C11.2065 7.50016 10.8334 7.12707 10.8334 6.66683Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M6.66663 9.99984C6.66663 9.5396 7.03972 9.1665 7.49996 9.1665H12.5C12.9602 9.1665 13.3333 9.5396 13.3333 9.99984C13.3333 10.4601 12.9602 10.8332 12.5 10.8332H7.49996C7.03972 10.8332 6.66663 10.4601 6.66663 9.99984Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

UiIconLinkFilled1.propTypes = {
  color: PropTypes.string,
};
