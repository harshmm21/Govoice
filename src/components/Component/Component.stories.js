import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
  argTypes: {
    upDown: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    upDown: "off",
    className: {},
    divClassName: {},
  },
};
