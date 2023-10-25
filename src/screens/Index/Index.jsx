import React from "react";
import { Avatar } from "../../components/Avatar";
import { Button } from "../../components/Button";
import { Divider } from "../../components/Divider";
import { OverviewMobile } from "../../components/OverviewMobile";
import { UiIconImageLightWrapper } from "../../components/UiIconImageLightWrapper";
import { UiIconMore } from "../../components/UiIconMore";
import { UiIconVideo } from "../../components/UiIconVideo";
import { VuesaxLinearFolder } from "../../components/VuesaxLinearFolder";
import { Widget } from "../../components/Widget";
import { UiIconArrowForwardLight6 } from "../../icons/UiIconArrowForwardLight6";
import { UiIconCloseLight } from "../../icons/UiIconCloseLight";
import { VuesaxLinearAddCircle1 } from "../../icons/VuesaxLinearAddCircle1";
import "./style.css";

export const Index = () => {
  return (
    <div className="index">
      <div className="div-5">
        <div className="frame-wrapper">
          <div className="div-wrapper">
            <div className="text-wrapper-8">Dashboard</div>
          </div>
        </div>
        <div className="frame-8">
          <div className="frame-9">
            <div className="overlap-wrapper">
              <div className="overlap-2">
                <OverviewMobile
                  chartToolTipText="Average"
                  className="overview-mobile-instance"
                  overviewTabText="Dislikes"
                  overviewTabText1="Likes"
                  tab="income"
                  text="2,000"
                  text1="1,500"
                  text2="1000"
                  text3="500"
                  text4="0"
                  theme="off"
                  widgetTitleDropdownText="Filter"
                  widgetTitleText="Post Overview"
                />
                <div className="promote-post">
                  <div className="frame-10">
                    <div className="div-6">
                      <div className="title">
                        <div className="tag-2" />
                        <div className="new-post">Create Post</div>
                      </div>
                      <div className="UI-icon-close-light-wrapper">
                        <UiIconCloseLight className="UI-icon-close-light" color="#33383F" />
                      </div>
                    </div>
                    <div className="social-account">
                      <div className="social-network">
                        <Avatar className="avatar-2" customerClassName="avatar-3" face="one" />
                      </div>
                    </div>
                  </div>
                  <div className="frame-11">
                    <Divider
                      className="design-component-instance-node-2"
                      direction="horizontal"
                      size="one-px"
                      theme="off"
                    />
                    <div className="div-6">
                      <div className="frame-12">
                        <div className="frame-13">
                          <UiIconImageLightWrapper />
                        </div>
                        <div className="frame-13">
                          <UiIconVideo />
                        </div>
                      </div>
                      <Button
                        className="button-2"
                        divClassName="button-3"
                        icon="on"
                        override={<UiIconArrowForwardLight6 className="ui-icon-arrow-forward-light-6" />}
                        position="right"
                        size="medium"
                        state="deactive"
                        style="primary"
                        text="Post"
                        theme="off"
                      />
                    </div>
                  </div>
                </div>
                <input className="title-of-the-post" />
                <input className="what-you-would-like" />
                <VuesaxLinearFolder className="vuesax-linear-folder-add" />
                <img
                  className="rectangle"
                  alt="Rectangle"
                  src="https://cdn.animaapp.com/projects/65385e236b310e4a2772b835/releases/65385f5fe200dbc4edbf8bbf/img/rectangle-335.svg"
                />
                <img
                  className="rectangle-2"
                  alt="Rectangle"
                  src="https://cdn.animaapp.com/projects/65385e236b310e4a2772b835/releases/65385f5fe200dbc4edbf8bbf/img/rectangle-336.svg"
                />
              </div>
            </div>
          </div>
          <div className="frame-14">
            <div className="frame-15">
              <div className="overlap-3">
                <div className="nav-bar-by-anas">
                  <div className="overlap-group-2">
                    <img
                      className="frame-16"
                      alt="Frame"
                      src="https://cdn.animaapp.com/projects/65385e236b310e4a2772b835/releases/65385f5fe200dbc4edbf8bbf/img/frame-3298.svg"
                    />
                    <VuesaxLinearAddCircle1 className="vuesax-linear-add" />
                    <img
                      className="frame-17"
                      alt="Frame"
                      src="https://cdn.animaapp.com/projects/65385e236b310e4a2772b835/releases/65385f5fe200dbc4edbf8bbf/img/frame-3299.svg"
                    />
                  </div>
                </div>
                <img
                  className="line"
                  alt="Line"
                  src="https://cdn.animaapp.com/projects/65385e236b310e4a2772b835/releases/65385f5fe200dbc4edbf8bbf/img/line-1.svg"
                />
              </div>
              <Widget
                className="widget-instance"
                commentAvatarFaceClassName="widget-5"
                commentDividerDirectionHorizontalClassName="design-component-instance-node-2"
                commentHasActions={false}
                commentHasDiv={false}
                commentText="Agree !"
                commentText1="Could have done better."
                commentVisible={false}
                theme="off"
                widgetTitleActionsClassName="widget-3"
                widgetTitleBreakpoint="three-hundred-and-seventy-five"
                widgetTitleMoreIconIcon={<UiIconMore />}
                widgetTitleMoreIconStateHoverClassName="widget-2"
                widgetTitleThemeOffBreakpointClassName="widget-4"
                widgetTitleVisible={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
