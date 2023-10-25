/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { UiIconArrowForwardLight4 } from "../../icons/UiIconArrowForwardLight4";
import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { ChartToolTip } from "../ChartToolTip";
import { OverviewTab } from "../OverviewTab";
import { WidgetTitle } from "../WidgetTitle";
import "./style.css";

export const OverviewMobile = ({
  theme,
  tab,
  className,
  widgetTitleDropdownText = "All time",
  widgetTitleText = "Overview",
  overviewTabText = "Customers",
  overviewTabText1 = "Income",
  text = "$2,000",
  text1 = "$1,500",
  text2 = "$1000",
  text3 = "$500",
  text4 = "$0",
  chartToolTipText = "Earning",
}) => {
  return (
    <div className={`overview-mobile theme-9-${theme} ${className}`}>
      <WidgetTitle
        breakpoint="three-hundred-and-seventy-five"
        className="widget-title-instance"
        dropdownText={widgetTitleDropdownText}
        text={widgetTitleText}
        theme={theme === "on" ? "on" : "off"}
        visible={false}
      />
      <div className="overview-tab-2">
        <OverviewTab
          className="overview-tab-instance"
          componentUpDown="on"
          componentUpDownOnClassName={`${
            tab === "customer" && theme === "on"
              ? "class-7"
              : theme === "off" && tab === "income"
              ? "button-instance"
              : tab === "income" && theme === "on"
              ? "class-8"
              : "class-9"
          }`}
          device="mobile"
          state={tab === "income" ? "default" : "active"}
          text={overviewTabText}
          text1={tab === "income" ? "1024" : undefined}
          text2={tab === "customer" ? "Customers" : undefined}
          text3={tab === "customer" ? "1024" : undefined}
          theme={theme === "on" ? "on" : "off"}
        />
        <OverviewTab
          className="overview-tab-instance"
          componentUpDown="off"
          componentUpDownOnClassName={`${
            theme === "off" ? "button-instance" : tab === "income" && theme === "on" ? "class-10" : "class-8"
          }`}
          device="mobile"
          state={tab === "income" ? "active" : "default"}
          text={tab === "customer" ? "Income" : undefined}
          text1={tab === "customer" ? "256k" : undefined}
          text2={overviewTabText1}
          text3={tab === "income" ? "256k" : undefined}
          theme={theme === "on" ? "on" : "off"}
        />
      </div>
      <div className={`new-customers ${tab}`}>
        {tab === "customer" && (
          <>
            <div className="frame-5">
              <p className="welcome">
                <span className="span">Welcome </span>
                <span className="text-wrapper-2">857 customers</span>
                <span className="span"> with a personal message 😎</span>
              </p>
              <Button
                className="button-instance"
                icon="off"
                position="off"
                size="medium"
                state="default"
                style="secondary"
                text="Send"
                theme={theme === "on" ? "on" : "off"}
              />
            </div>
            <div className="customer-2">
              <div className="div-2">
                <Avatar className="avatar-instance" face="one" />
                <div className="name">Gladyce</div>
              </div>
              <div className="div-2">
                <Avatar className={`${theme === "on" ? "class-11" : "class-12"}`} face="three" />
                <div className="name-2">Elbert</div>
              </div>
              <div className="div-2">
                <div className="UI-icon-arrow-wrapper">
                  <UiIconArrowForwardLight4 className="UI-icon-arrow" />
                </div>
                <div className="text-wrapper-3">View all</div>
              </div>
            </div>
          </>
        )}

        {tab === "income" && (
          <div className="earning-chart">
            <div className="overlap">
              <div className="overlap-group">
                <div className="frame-6">
                  <div className="h-line" />
                  <div className="h-line-2" />
                  <div className="h-line-3" />
                  <div className="h-line-4" />
                  <div className="h-line-5" />
                </div>
                <div className="amount">
                  <div className="element-4">{text}</div>
                  <div className="element-5">{text1}</div>
                  <div className="element-5">{text2}</div>
                  <div className="element-5">{text3}</div>
                  <div className="element-5">{text4}</div>
                </div>
                <img
                  className="graph"
                  alt="Graph"
                  src="https://cdn.animaapp.com/projects/65385e236b310e4a2772b835/releases/65385f5fe200dbc4edbf8bbf/img/graph-01.svg"
                />
                <div className="point" />
                <div className="point-2" />
                <ChartToolTip
                  className="chart-tool-tip-instance"
                  frameClassName="chart-tool-tip-2"
                  text={chartToolTipText}
                  text1="1,485.00"
                  theme={theme === "on" ? "off" : "on"}
                />
              </div>
              <div className="time">
                <div className="text-wrapper-4">Apr</div>
                <div className="text-wrapper-4">May</div>
                <div className="text-wrapper-4">Jun</div>
                <div className="text-wrapper-4">July</div>
                <div className="text-wrapper-4">Aug</div>
                <div className="text-wrapper-4">Sep</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

OverviewMobile.propTypes = {
  theme: PropTypes.oneOf(["off", "on"]),
  tab: PropTypes.oneOf(["customer", "income"]),
  widgetTitleDropdownText: PropTypes.string,
  widgetTitleText: PropTypes.string,
  overviewTabText: PropTypes.string,
  overviewTabText1: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  chartToolTipText: PropTypes.string,
};
