/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { UiIconHeartLight } from "../../icons/UiIconHeartLight";
import { Button } from "../Button";
import { Comment } from "../Comment";
import { UiIconMore } from "../UiIconMore";
import { WidgetTitle } from "../WidgetTitle";
import "./style.css";

export const Widget = ({
  theme,
  className,
  widgetTitleMoreIconStateHoverClassName,
  widgetTitleMoreIconIcon = <UiIconMore />,
  widgetTitleActionsClassName,
  widgetTitleVisible,
  widgetTitleBreakpoint = "fourteen-million-four-hundred-and-one-thousand-and-twenty-four",
  widgetTitleThemeOffBreakpointClassName,
  commentHasActions,
  commentHasDiv,
  commentText = "I need react version asap!",
  commentAvatarFaceClassName,
  commentDividerDirectionHorizontalClassName,
  commentVisible,
  commentText1 = "How can I buy only the design?",
}) => {
  return (
    <div className={`widget theme-27-${theme} ${className}`}>
      <WidgetTitle
        actionsClassName={widgetTitleActionsClassName}
        breakpoint={widgetTitleBreakpoint}
        className={widgetTitleThemeOffBreakpointClassName}
        dropdownText={theme === "off" ? "All time" : undefined}
        moreIconIcon={widgetTitleMoreIconIcon}
        moreIconStateHoverClassName={widgetTitleMoreIconStateHoverClassName}
        tagClassName="widget-title-2"
        text="Comments"
        theme={theme === "on" ? "on" : "off"}
        visible1={widgetTitleVisible}
      />
      <div className="comments">
        <Comment
          avatarCustomerClassName="comment-instance"
          avatarFace="one"
          avatarFaceClassName="comment-3"
          className="instance-node-3"
          dividerDirectionHorizontalClassName="comment-2"
          hasActions={commentHasActions}
          icon={<UiIconHeartLight className="UI-icon-heart-light" />}
          text="Ethel"
          text1="@ethel"
          text2="1h"
          text3="Smiles – 3D icons"
          text4="Great work 😊"
          theme={theme === "on" ? "on" : "off"}
        />
        <Comment
          avatarCustomerClassName="comment-4"
          avatarFace="two"
          avatarFaceClassName={`${theme === "on" ? "comment-3" : "class-15"}`}
          className="instance-node-3"
          dividerDirectionHorizontalClassName="comment-2"
          hasActions={commentHasDiv}
          icon={<UiIconHeartLight className="UI-icon-heart-light" />}
          text="Jazmyn"
          text1="@jaz.designer"
          text2="8h"
          text3="Fleet - Travel shopping"
          text4={commentText}
          theme={theme === "on" ? "on" : "off"}
        />
        <Comment
          avatarCustomerClassName="comment-5"
          avatarFace="three"
          avatarFaceClassName={commentAvatarFaceClassName}
          className="instance-node-3"
          dividerDirectionHorizontalClassName={commentDividerDirectionHorizontalClassName}
          hasActions={commentVisible}
          icon={<UiIconHeartLight className="UI-icon-heart-light" />}
          text="Ethel"
          text1="@ethel"
          text2="1h"
          text3="Smiles – 3D icons"
          text4={commentText1}
          theme={theme === "on" ? "on" : "off"}
        />
        <Button
          className="instance-node-3"
          icon="off"
          position="off"
          size="medium"
          state="default"
          style="secondary"
          text="View all"
          theme={theme === "on" ? "on" : "off"}
        />
      </div>
    </div>
  );
};

Widget.propTypes = {
  theme: PropTypes.oneOf(["off", "on"]),
  widgetTitleVisible: PropTypes.bool,
  widgetTitleBreakpoint: PropTypes.string,
  commentHasActions: PropTypes.bool,
  commentHasDiv: PropTypes.bool,
  commentText: PropTypes.string,
  commentVisible: PropTypes.bool,
  commentText1: PropTypes.string,
};
