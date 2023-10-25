/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Divider = ({ direction, size, theme, className }) => {
  return <div className={`divider theme-20-${theme} ${size} ${className}`} />;
};

Divider.propTypes = {
  direction: PropTypes.oneOf(["horizontal"]),
  size: PropTypes.oneOf(["one-px", "two-px"]),
  theme: PropTypes.oneOf(["off", "on"]),
};
