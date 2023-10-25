/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconPlaceholder } from "../IconPlaceholder";
import "./style.css";

export const Button = ({
  style,
  size,
  icon,
  position,
  state,
  theme,
  className,
  divClassName,
  text = "Button",
  override = (
    <IconPlaceholder className="icon-placeholder-instance" ellipseClassName="design-component-instance-node" />
  ),
}) => {
  return (
    <button className={`button ${size} ${style} state-3-${state} theme-21-${theme} ${className}`}>
      {position === "right" && (
        <>
          <div className={`text-wrapper-5 ${divClassName}`}>{text}</div>
          {override}
        </>
      )}

      {position === "left" && (
        <IconPlaceholder
          className="icon-placeholder-instance"
          ellipseClassName={`${theme === "off" && state === "deactive" && style === "secondary" && "class-13"} ${
            state === "default" &&
            (style === "primary" || theme === "on") &&
            ["off", "on"].includes(theme) &&
            "class-14"
          } ${
            state === "deactive" &&
            (style === "primary" || theme === "on") &&
            ["off", "on"].includes(theme) &&
            "design-component-instance-node"
          }`}
        />
      )}

      {["left", "off"].includes(position) && <div className="text-wrapper-6">{text}</div>}
    </button>
  );
};

Button.propTypes = {
  style: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["medium", "small"]),
  icon: PropTypes.oneOf(["off", "on"]),
  position: PropTypes.oneOf(["off", "right", "left"]),
  state: PropTypes.oneOf(["deactive", "default"]),
  theme: PropTypes.oneOf(["off", "on"]),
  text: PropTypes.string,
};
