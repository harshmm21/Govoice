/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { UiIcon16Down12 } from "../../icons/UiIcon16Down12";
import { UiIcon16Up9 } from "../../icons/UiIcon16Up9";
import "./style.css";

export const Component = ({ upDown, className, divClassName }) => {
  return (
    <div className={`component up-down-${upDown} ${className}`}>
      {upDown === "on" && <UiIcon16Down12 className="instance-node" color="#FF6A55" />}

      {upDown === "off" && <UiIcon16Up9 className="instance-node" color="#83BF6E" />}

      <div className={`text-wrapper ${divClassName}`}>37.8%</div>
    </div>
  );
};

Component.propTypes = {
  upDown: PropTypes.oneOf(["off", "on"]),
};
