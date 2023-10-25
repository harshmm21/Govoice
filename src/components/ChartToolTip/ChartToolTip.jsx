/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ChartToolTip = ({ theme, className, text = "24 September", frameClassName, text1 = "20k" }) => {
  return (
    <div className={`chart-tool-tip theme-6-${theme} ${className}`}>
      <div className="element-september">{text}</div>
      <div className="frame-3">
        <div className={`frame-4 ${frameClassName}`} />
        <div className="element-k">{text1}</div>
      </div>
    </div>
  );
};

ChartToolTip.propTypes = {
  theme: PropTypes.oneOf(["off", "on"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
