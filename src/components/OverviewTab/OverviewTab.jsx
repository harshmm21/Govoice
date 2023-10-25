/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { UiIconInfoFilled } from "../../icons/UiIconInfoFilled";
import { UiIconShoppingBagLight8 } from "../../icons/UiIconShoppingBagLight8";
import { Component } from "../Component";
import { UiIconInfoFilledWrapper } from "../UiIconInfoFilledWrapper";
import "./style.css";

export const OverviewTab = ({
  state,
  theme,
  device,
  className,
  text = "Income",
  text1 = "256k",
  componentUpDown = "off",
  text2 = "Customers",
  text3 = "1024",
  componentUpDownOnClassName,
}) => {
  return (
    <div className={`overview-tab ${state} ${device} theme-0-${theme} ${className}`}>
      {device === "desktop" && (
        <>
          <div className="info">
            <div className="icon-place-holder">
              <UiIconShoppingBagLight8 className="UI-icon-shopping-bag" color="#1A1D1F" />
            </div>
            <div className="frame">
              <div className="caption">
                <div className="customers">
                  {(theme === "off" || (state === "active" && theme === "on")) && <>{text2}</>}

                  {state === "default" && theme === "on" && <>{text}</>}
                </div>
                <UiIconInfoFilled className="ui-icon-info-filled" color="#9A9FA5" />
              </div>
              <div className="element">
                {theme === "off" && <>857</>}

                {state === "active" && theme === "on" && <>{text3}</>}

                {state === "default" && theme === "on" && <>{text1}</>}
              </div>
            </div>
          </div>
          <Component
            className={`${
              state === "default" && theme === "off"
                ? "class-2"
                : state === "active" && theme === "on"
                ? "class-3"
                : state === "default" && theme === "on"
                ? "class-4"
                : "class-5"
            }`}
            divClassName={`${state === "default" && "class"}`}
            upDown={state === "default" ? "off" : "on"}
          />
        </>
      )}

      {["mobile", "tablet"].includes(device) && (
        <div className="info-2">
          {device === "tablet" && (
            <>
              <div className="UI-icon-shopping-bag-wrapper">
                <UiIconShoppingBagLight8 className="UI-icon-shopping-bag" color="#1A1D1F" />
              </div>
              <div className="frame">
                <div className="caption">
                  <div className="customers">
                    {(theme === "off" || (state === "active" && theme === "on")) && <>{text2}</>}

                    {state === "default" && theme === "on" && <>{text}</>}
                  </div>
                  <UiIconInfoFilled className="ui-icon-info-filled" color="#9A9FA5" />
                </div>
                <div className="element-2">
                  {theme === "off" && <>857</>}

                  {state === "active" && theme === "on" && <>{text3}</>}

                  {state === "default" && theme === "on" && <>{text1}</>}
                </div>
                <Component
                  className={componentUpDownOnClassName}
                  divClassName={`${state === "default" && theme === "on" && "class"}`}
                  upDown={componentUpDown}
                />
              </div>
            </>
          )}

          {device === "mobile" && (
            <div className="frame-2">
              <div className="caption">
                <div className="customers-2">
                  {state === "active" && <>{text2}</>}

                  {state === "default" && <>{text}</>}
                </div>
                <UiIconInfoFilledWrapper />
              </div>
              <div className="element-3">
                {state === "active" && <>{text3}</>}

                {state === "default" && <>{text1}</>}
              </div>
              <Component
                className={componentUpDownOnClassName}
                divClassName={`${state === "active" && theme === "on" && "class-6"}`}
                upDown={componentUpDown}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

OverviewTab.propTypes = {
  state: PropTypes.oneOf(["active", "default"]),
  theme: PropTypes.oneOf(["off", "on"]),
  device: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  componentUpDown: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
};
