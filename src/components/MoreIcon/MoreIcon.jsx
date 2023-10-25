/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { UiIconMoreHorizontalFilled2 } from "../../icons/UiIconMoreHorizontalFilled2";
import "./style.css";

export const MoreIcon = ({
  state,
  className,
  icon = <UiIconMoreHorizontalFilled2 className="ui-icon-more-horizontal-filled-6" color="#6F767E" />,
}) => {
  return <div className={`more-icon ${state} ${className}`}>{icon}</div>;
};

MoreIcon.propTypes = {
  state: PropTypes.oneOf(["default", "hover"]),
};
