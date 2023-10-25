/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const UiIconShoppingBagLight8 = ({ color = "#6F767E", className }) => {
  return (
    <svg
      className={`ui-icon-shopping-bag-light-8 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M12.0001 2C9.79092 2 8.00006 3.79086 8.00006 6H6.64839C5.13542 6 3.85922 7.12661 3.67156 8.6279L2.42156 18.6279C2.19774 20.4185 3.5939 22 5.39839 22H18.6017C20.4062 22 21.8024 20.4185 21.5785 18.6279L20.3285 8.6279C20.1409 7.12661 18.8647 6 17.3517 6H16.0001C16.0001 3.79086 14.2092 2 12.0001 2ZM14.0001 8V9C14.0001 9.55228 14.4478 10 15.0001 10C15.5523 10 16.0001 9.55228 16.0001 9V8H17.3517C17.856 8 18.2814 8.37554 18.344 8.87597L19.594 18.876C19.6686 19.4728 19.2032 20 18.6017 20H5.39839C4.79689 20 4.33151 19.4728 4.40611 18.876L5.65611 8.87597C5.71867 8.37554 6.14407 8 6.64839 8H8.00006V9C8.00006 9.55228 8.44778 10 9.00006 10C9.55235 10 10.0001 9.55228 10.0001 9V8H14.0001ZM14.0001 6C14.0001 4.89543 13.1046 4 12.0001 4C10.8955 4 10.0001 4.89543 10.0001 6H14.0001Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

UiIconShoppingBagLight8.propTypes = {
  color: PropTypes.string,
};
