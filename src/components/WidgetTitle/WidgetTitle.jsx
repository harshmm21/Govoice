/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { UiIconMoreHorizontalFilled2 } from "../../icons/UiIconMoreHorizontalFilled2";
import { Dropdown } from "../Dropdown";
import { MoreIcon } from "../MoreIcon";
import "./style.css";

export const WidgetTitle = ({
  theme,
  breakpoint,
  className,
  text = "Overview",
  dropdownText = "All time",
  visible = true,
  tagClassName,
  actionsClassName,
  visible1 = true,
  moreIconStateHoverClassName,
  moreIconIcon = <UiIconMoreHorizontalFilled2 className="UI-icon-more" color="#6F767E" />,
}) => {
  return (
    <div className={`widget-title ${className}`}>
      <div className="div">
        <div className={`tag ${tagClassName}`} />
        <div className={`overview theme-${theme} ${breakpoint}`}>{text}</div>
      </div>
      <div className={`div ${actionsClassName}`}>
        {visible1 && (
          <Dropdown
            className="dropdown-instance"
            size="small"
            text={dropdownText}
            theme={theme === "on" ? "on" : "off"}
          />
        )}

        {visible && <MoreIcon className={moreIconStateHoverClassName} icon={moreIconIcon} state="default" />}
      </div>
    </div>
  );
};

WidgetTitle.propTypes = {
  theme: PropTypes.oneOf(["off", "on"]),
  breakpoint: PropTypes.oneOf([
    "fourteen-million-four-hundred-and-one-thousand-and-twenty-four",
    "three-hundred-and-seventy-five",
  ]),
  text: PropTypes.string,
  dropdownText: PropTypes.string,
  visible: PropTypes.bool,
  visible1: PropTypes.bool,
};
