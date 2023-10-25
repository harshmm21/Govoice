/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const UiIconUnderlineFilled2 = ({ color = "#6F767E", className }) => {
  return (
    <svg
      className={`ui-icon-underline-filled-2 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M4.16602 17.4998C4.16602 17.0396 4.53911 16.6665 4.99935 16.6665H14.9993C15.4596 16.6665 15.8327 17.0396 15.8327 17.4998C15.8327 17.9601 15.4596 18.3332 14.9993 18.3332H4.99935C4.53911 18.3332 4.16602 17.9601 4.16602 17.4998Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M4.99935 1.6665C5.45959 1.6665 5.83268 2.0396 5.83268 2.49984V9.1665C5.83268 11.4677 7.69816 13.3332 9.99935 13.3332C12.3005 13.3332 14.166 11.4677 14.166 9.1665V2.49984C14.166 2.0396 14.5391 1.6665 14.9993 1.6665C15.4596 1.6665 15.8327 2.0396 15.8327 2.49984V9.1665C15.8327 12.3882 13.221 14.9998 9.99935 14.9998C6.77769 14.9998 4.16602 12.3882 4.16602 9.1665V2.49984C4.16602 2.0396 4.53911 1.6665 4.99935 1.6665Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

UiIconUnderlineFilled2.propTypes = {
  color: PropTypes.string,
};
