/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { UiIconHeartLight6 } from "../../icons/UiIconHeartLight6";
import { UiIconLinkFilled1 } from "../../icons/UiIconLinkFilled1";
import { UiIconMessageLight6 } from "../../icons/UiIconMessageLight6";
import { Avatar } from "../Avatar";
import { Divider } from "../Divider";
import "./style.css";

export const Comment = ({
  theme,
  className,
  text = "Name",
  text1 = "@username",
  text2 = "Time",
  text3 = "Product title",
  text4 = "Comment goes here 😊",
  hasActions = true,
  avatarFaceClassName,
  avatarFace = "one",
  avatarCustomerClassName,
  dividerDirectionHorizontalClassName,
  icon = <UiIconHeartLight6 className="instance-node-2" />,
}) => {
  return (
    <div className={`comment ${className}`}>
      <div className="div-3">
        <div className="avatar-info">
          <Avatar className={avatarFaceClassName} customerClassName={avatarCustomerClassName} face={avatarFace} />
          <div className="comment-info">
            <div className="div-4">
              <div className="user">
                <div className={`name-3 theme-24-${theme}`}>{text}</div>
                <div className="text-wrapper-7">{text1}</div>
              </div>
              <div className="time-wrapper">
                <div className="time-2">{text2}</div>
              </div>
            </div>
            <div className="product-title">
              <div className="product-title-2">
                <div className="text-wrapper-7">On</div>
                <div className={`product-title-3 theme-25-${theme}`}>{text3}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="frame-7">
            <div className={`comment-goes-here theme-26-${theme}`}>{text4}</div>
            {hasActions && (
              <div className="div-4">
                <UiIconMessageLight6 className="instance-node-2" color="#9A9FA5" />
                {icon}
                <UiIconLinkFilled1 className="instance-node-2" color="#9A9FA5" />
              </div>
            )}
          </div>
        </div>
      </div>
      <Divider
        className={dividerDirectionHorizontalClassName}
        direction="horizontal"
        size="one-px"
        theme={theme === "on" ? "on" : "off"}
      />
    </div>
  );
};

Comment.propTypes = {
  theme: PropTypes.oneOf(["off", "on"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  hasActions: PropTypes.bool,
  avatarFace: PropTypes.string,
};
