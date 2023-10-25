/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Size24DirectionDown } from "../../icons/Size24DirectionDown";
import "./style.css";

export const Dropdown = ({ size, theme, className, text = "All time" }) => {
  return (
    <div className={`dropdown ${theme} ${className}`}>
      <div className="all-time">{text}</div>
      <Size24DirectionDown className="cheveron" />
    </div>
  );
};

Dropdown.propTypes = {
  size: PropTypes.oneOf(["small"]),
  theme: PropTypes.oneOf(["off", "on"]),
  text: PropTypes.string,
};
