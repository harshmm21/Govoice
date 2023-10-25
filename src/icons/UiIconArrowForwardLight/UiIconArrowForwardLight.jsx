/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const UiIconArrowForwardLight = ({ color = "#FCFCFC", className }) => {
  return (
    <svg
      className={`ui-icon-arrow-forward-light ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="circle" cx="12" cy="12" r="4.95" stroke="#CDCDCD" strokeWidth="0.1" />
      <rect
        className="rect"
        height="17.9"
        rx="0.95"
        stroke="#CDCDCD"
        strokeWidth="0.1"
        width="17.9"
        x="3.05"
        y="3.05"
      />
      <rect
        className="rect"
        height="19.9"
        rx="0.95"
        stroke="#CDCDCD"
        strokeWidth="0.1"
        width="15.9"
        x="4.05"
        y="2.05"
      />
      <rect
        className="rect"
        height="15.9"
        rx="0.95"
        stroke="#CDCDCD"
        strokeWidth="0.1"
        width="19.9"
        x="2.05"
        y="4.05"
      />
      <path className="path" d="M0.5 0.5L23.5 23.5" stroke="#CDCDCD" strokeLinecap="square" strokeWidth="0.1" />
      <path className="path" d="M0.5 23.5L23.5 0.5" stroke="#CDCDCD" strokeLinecap="square" strokeWidth="0.1" />
      <circle className="circle" cx="12" cy="12" r="9.95" stroke="#CDCDCD" strokeWidth="0.1" />
      <path
        className="path"
        d="M13.2929 17.7929C12.9024 18.1834 12.9024 18.8166 13.2929 19.2071C13.6834 19.5976 14.3166 19.5976 14.7071 19.2071L20.5 13.4142C21.281 12.6332 21.281 11.3668 20.5 10.5858L14.7071 4.79289C14.3166 4.40237 13.6834 4.40237 13.2929 4.79289C12.9024 5.18342 12.9024 5.81658 13.2929 6.20711L18.0858 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H18.0858L13.2929 17.7929Z"
        fill={color}
      />
    </svg>
  );
};

UiIconArrowForwardLight.propTypes = {
  color: PropTypes.string,
};
